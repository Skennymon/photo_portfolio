"use client"
import Image from "next/image"
import { useState } from "react"

export default function ContactMe() {

    const[firstName, setFirstName] = useState("")
    const[lastName, setLastName] = useState("")
    const[email, setEmail] = useState("")
    const[phoneNumber, setPhoneNumber] = useState("")
    const[message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <>
            <article className="flex items-center justify-center flex-col gap-2">
                <div className="relative w-full h-[25rem]">
                    <Image src="/EpicCar.jpg" alt="Car Picture" fill={true} style={{objectFit: "cover"}}/>
                </div>

                <form className="md:grid md:grid-cols-2 gap-7">
                    <div>
                        <h2>First Name *</h2>
                        <input className="border" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    </div>

                    <div>
                        <h2>Last Name *</h2>
                        <input className="border" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    </div>

                    <div>
                        <h2>Email *</h2>
                        <input className="border" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div>
                        <h2>Phone *</h2>
                        <input className="border" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                    </div>

                    <button type="submit" className="border bg-amber-600">Submit</button>
                </form>


            </article>
        </>
    )
}