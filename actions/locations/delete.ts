'use server'
import { API_URL, TOKEN_NAME } from "@/constants"
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function deleteLocation(formData: FormData){
    const locationId = formData.get("deleteValue")
    if(!locationId) return;
    fetch(`${API_URL}/locations/${locationId}`, {
       method: "DELETE", 
        headers: {
            ...AuthHeaders(),
        }
    })
    revalidateTag("dashboard:locations");
    redirect("/dashboard");
}