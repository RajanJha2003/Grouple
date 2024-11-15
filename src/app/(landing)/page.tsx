import Image from "next/image"
import CallToAction from "./_components/call-to-action"
import DashboardSnippet from "./_components/dashboard-snippet"

export default function Home() {
    return (
       <main className="md:px-10 py-20 flex flex-col gap-36">
        <div>
            <CallToAction />
            <DashboardSnippet />

        </div>

       </main>
    )
}
