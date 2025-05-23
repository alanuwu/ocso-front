import { Button, Input } from "@heroui/react";
import { createLocation } from "@/actions/locations/create";
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import SelectManager from "./SelectManagers";
import { Manager } from "@/entities";
import { Location } from "@/entities";
import DeleteLocation from "@/actions/locations/delete";
import { AuthHeaders } from "@/helpers/authHeaders";
export default async function FormNewLocation({ store }: {store: string| string[] | undefined}) {
    if (store && store !== "0") return null;
    const token = cookies().get(TOKEN_NAME)?.value;
    const responseManagers = await fetch(`${API_URL}/managers/`, {
        method: "GET",
        headers: {
            ...AuthHeaders()
        },
        next: {
            tags: ["dashboard:managers"]
        }
    });
    const dataManagers: Manager[] = await responseManagers.json();
    console.log("dataManagers:", dataManagers);
    const responseLocation = await fetch(`${API_URL}/locations`, {
        method: "GET",
        headers: {
            ...AuthHeaders()
        },
        next: {
            tags: ["dashboard:locations"]
        }
    });
    const dataLocation: Location[] = await responseLocation.json();
    return (
        <form action={createLocation} className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-xl text-white text-center">Crear Tienda</h1>
            <Input label="Nombre" placeholder="Ocso Juriquilla" name="locationName" className="rounded-lg"/>
            <Input label="Dirección" placeholder="Av de la luz" name="locationAddress" className="rounded-lg" />
            <Input label="Latitud" placeholder="120" name="locationLat" className="rounded-lg"/>
            <Input label="Longitud" placeholder="240" name="locationLng" className="rounded-lg"/>
            <SelectManager managers={Array.isArray(dataManagers) ? dataManagers : []} locations={dataLocation} />
            <Button type="submit" color="primary" className="bg-blue-500 rounded-lg px-5 py-5">Subir</Button>
        </form>
    );
}