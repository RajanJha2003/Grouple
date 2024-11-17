"use server"
import { client } from "@/lib/prisma"
import Stripe from "stripe"
import { onAuthenticatedUser } from "./auth"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    typescript: true,
    apiVersion: "2024-06-20",
})

export const onGetStripeClientSecret = async () => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            currency: "inr",
            amount: 9000,
            automatic_payment_methods: {
                enabled: true,
            },
        })

        if (paymentIntent) {
            return { secret: paymentIntent.client_secret }
        }
    } catch (error) {
        return { status: 400, message: "Failed to load form" }
    }
}

export const onTransferCommission = async (destination: string) => {
    try {
        const transfer = await stripe.transfers.create({
            amount: 3600,
            currency: "inr",
            destination: destination,
        })

        if (transfer) {
            return { status: 200 }
        }
    } catch (error) {
        return { status: 400 }
    }
}
