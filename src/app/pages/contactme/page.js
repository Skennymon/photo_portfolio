import Image from "next/image"
import Form from "next/form"
import { handleFormSubmission } from "@/app/actions/HandleFormSubmission"

export default function ContactMe() {

    return (
        <>
            <article className="flex items-center justify-center flex-col gap-2">
                <div className="relative w-full h-[25rem]">
                    <Image src="/EpicCar.jpg" alt="Car Picture" fill={true} style={{objectFit: "cover"}}/>
                </div>
                <h1 className="font-main text-2xl md:text-4xl">Contact Me!</h1>

                <form className="md:grid md:grid-cols-2 gap-7 border p-7 rounded-2xl" action={handleFormSubmission}>
                    <div>
                        <h2>First Name *</h2>
                        <input className="rounded-sm border h-[2rem]" name="firstName"/>
                    </div>

                    <div>
                        <h2>Last Name *</h2>
                        <input className="rounded-sm border h-[2rem]" name="lastName"/>
                    </div>

                    <div>
                        <h2>Email *</h2>
                        <input className="rounded-sm border h-[2rem]" type="email" name="email"/>
                    </div>

                    <div>
                        <h2>Phone *</h2>
                        <input className="rounded-sm border h-[2rem]" name="phoneNumber"/>
                    </div>

                    <div>
                        <h2>Message *Optional</h2>
                        <textarea className="rounded-sm border h-[10rem] justify-start" name="message"/>
                    </div>

                    <button type="submit" className="border bg-amber-600 h-[2rem]">Submit</button>
                </form>


            </article>
        </>
    )
}