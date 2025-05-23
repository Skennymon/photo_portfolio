'use server'
import supabase from "../../lib/supabase_client"
export async function handleFormSubmission(formData) {


    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phoneNumber = formData.get("phoneNumber");
    const message = formData.get("message");

    console.log({ firstName, lastName, email, phoneNumber, message });

    const { error } = await supabase
    .from("Contactees")
    .insert({FirstName: firstName, LastName: lastName, Email: email, PhoneNumber: phoneNumber, Message: message})

    if (error) {
        console.log("Something went wrong with the insert!");
    }

    return { success: true };
}
