'use server';
import { redirect } from "next/navigation";
import { Location } from "@/entities";
import { cookies } from "next/headers";
import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
export async function createLocation(formData: FormData) {
    let location: any = {};
    let locationLatLng = [0, 0];
    for (const key of Array.from(formData.keys())) {
        const value = formData.get(key);
        if (value) {
            if (key === 'locationLat') {
                locationLatLng[0] = +value;
            } else if (key === "locationLng") {
                locationLatLng[1] = +value;
            } else {
                location[key] = value;
            }
        }
    }
    location.locationLatLng = locationLatLng;
const response = await fetch(`${API_URL}/locations`, {
    method: "POST",
    body: JSON.stringify(location),
    headers: {
        'content-type': 'application/json',
        ...AuthHeaders()
    }
})
    const { locationId }: Location = await response.json();
    if(response.status === 201) {
        revalidateTag("dashboard:locations");
        redirect(`/dashboard?store=${locationId}`)
    }
}