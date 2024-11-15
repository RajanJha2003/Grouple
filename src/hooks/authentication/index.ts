import { SignInSchema } from "@/components/forms/sign-in/schema"
import { useSignIn } from "@clerk/nextjs"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { useMutation } from "@tanstack/react-query"

export const useAuthSignIn =  () => {
    const { isLoaded, signIn, setActive } = useSignIn()

    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
    } = useForm<z.infer<typeof SignInSchema>>({
        resolver: zodResolver(SignInSchema),
        mode: "onBlur",
    })

    const router = useRouter()
    const onClerkAuth = async (email: string, pasword: string) => {
        if (!isLoaded) {
            return toast("Error", {
                description: "Oops! Something went wrong",
            })
        }

        try {
            const authenticated = await signIn.create({
                identifier: email,
                password: pasword,
            })

            if (authenticated.status === "complete") {
                reset()
                await setActive({ session: authenticated.createdSessionId })
                toast("Success", {
                    description: "Welcome back",
                })

                router.push("/callback/sign-in")
            }
        } catch (error: any) {
            if (error.errors[0].code === "form_password_incorrect")
                toast("Error", {
                    description: "email/password is incorrect try again",
                })
        }
    }

    const { mutate: InitiateLoginFlow, isPending } = useMutation({
        mutationFn: ({
            email,
            password,
        }: {
            email: string
            password: string
        }) => onClerkAuth(email, password),
    })

    const onAuthenticateUser = handleSubmit(async (values) => {
        InitiateLoginFlow({ email: values.email, password: values.password })
    })

    return {
        onAuthenticateUser,
        isPending,
        register,
        errors,
    }
}
