import Image from "next/image"
import CallToAction from "./_components/call-to-action"

export default function Home() {
    return (
       <main className="md:px-10 py-20 flex flex-col gap-36">
        <div>
            <CallToAction />

        </div>

       </main>
    )
}
