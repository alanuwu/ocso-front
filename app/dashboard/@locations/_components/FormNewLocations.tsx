import { Button, Input } from "@heroui/react";
import { createLocation } from "@/actions/locations/create";
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import axios from "axios";
import SelectManager from "./SelectManagers";
import { Manager } from "@/entities";
import DeleteLocation from "@/actions/locations/delete";
export default async function FormNewLocation({ store }: {store: string| string[] | undefined}) {
    if (store && store !== "0") return null;
    const token = cookies().get(TOKEN_NAME)?.value;
    const responseManagers = await axios.get(`${API_URL}/managers/`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const responseLocation = await axios.get(`${API_URL}/locations`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return (
        <form action={createLocation} className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-xl text-white text-center">Crear Tienda</h1>
            <Input label="Nombre" placeholder="Ocso Juriquilla" name="locationName" className="rounded-lg"/>
            <Input label="Dirección" placeholder="Av de la luz" name="locationAddress" className="rounded-lg" />
            <Input label="Latitud" placeholder="120" name="locationLat" className="rounded-lg"/>
            <Input label="Longitud" placeholder="240" name="locationLng" className="rounded-lg"/>
            <SelectManager managers={responseManagers.data} locations={responseLocation.data} />
            <Button type="submit" color="primary" className="bg-blue-500 rounded-lg px-5 py-5">Subir</Button>
        </form>
    );
}