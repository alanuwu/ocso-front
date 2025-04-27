import { Button, Input } from "@heroui/react";
import { createLocation } from "@/actions/locations/create";
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import SelectManager from "./SelectManagers";
import { Manager } from "@/entities";
import { Location } from "@/entities";
import DeleteLocation from "@/actions/locations/delete";
import { AuthHeaders } from "@/helpers/authHeaders";
import UpdateLocation from "./UpdateLocation";
export default async function FormUpdateLocation({ store }: {store: string| string[] | undefined}) {
    if(!store || store === undefined) return null;
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
    let foundLocation = dataLocation.find((location) => location.locationId === +store);
    let foundManager = dataManagers.find((manager) => manager.managerId === foundLocation?.manager?.managerId);
    return (
        <form action={createLocation} className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-xl text-white text-center">Crear Tienda</h1>
            <Input defaultValue={foundLocation?.locationName} label="Nombre" placeholder="Ocso Juriquilla" name="locationName" className="rounded-lg"/>
            <Input defaultValue={foundLocation?.locationAddress} label="Dirección" placeholder="Av de la luz" name="locationAddress" className="rounded-lg" />
            <Input defaultValue={foundLocation?.locationAddress} label="Dirección" placeholder="Av de la luz" name="locationAddress" className="rounded-lg" />
            <Input label="Latitud" placeholder="120" name="locationLat" className="rounded-lg" />
            <Input label="Longitud" placeholder="240" name="locationLng" className="rounded-lg" />
            <SelectManager defaultManager={foundManager?.managerId} managers={Array.isArray(dataManagers) ? dataManagers : []} locations={dataLocation} />
            <Button type="submit" color="primary" className="bg-blue-500 rounded-lg px-5 py-5">Subir</Button>
        </form>
    );
}