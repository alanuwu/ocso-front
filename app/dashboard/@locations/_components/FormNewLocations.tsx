import { Button, Input } from "@nextui-org/react";
import { createLocation } from "@/actions/locations/create";
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import axios from "axios";
import SelectManager from "./SelectManagers";
import { Manager } from "@/entities";
export default async function FormNewLocation() {
    const token = cookies().get(TOKEN_NAME)?.value;
    const responseManagers = await axios.get(`${API_URL}/managers/`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const responseLocation = await axios.get(`${API_URL}/locations`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return (
        <form action={createLocation}>
            <Input label="Nombre" placeholder="Ocso Juriquilla" name="locationName" />
            <Input label="Dirección" placeholder="Av de la luz" name="locationAddress" />
            <Input label="Latitud" placeholder="120" name="locationLat" />
            <Input label="Longitud" placeholder="240" name="locationLng" />
            <SelectManager managers={responseManagers.data} locations={responseLocation.data} />
            <Button type="submit">Subir</Button>
        </form>
    )
}