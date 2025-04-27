import { API_URL, TOKEN_NAME } from "@/constants"
import { cookies } from "next/headers";
import { Select, SelectItem } from "@heroui/react";
import { Location } from "@/entities";
import SelectLocation from "@/app/dashboard/@locations/_components/SelectLocation";
import LocationCard from "./_components/LocationCard";
import FormNewLocation from "./_components/FormNewLocations";
import DeleteLocationButton from "./_components/DeleteLocationButton";
import { AuthHeaders } from "@/helpers/authHeaders";
import UpdateLocation from "./_components/UpdateLocation";
import FormUpdateLocation from "./_components/FormUpdateLocation";

interface Props {
    searchParams: { [key: string]: string | string[] | undefined }
}
const LocationsPage = async ({ searchParams }: Props) => {
    const response = await fetch(`${API_URL}/locations`, {
        method: "GET",
        headers: {
            ...AuthHeaders()
        },
        next: {
            tags: ["dashboard:locations:employees"]
        }
    });
    let data: Location[] = await response.json();
    data = [
        {
            locationId: 0,
            locationName: "Ninguna",
            locationLatLng: [0, 0],
            locationAddress: "No existe"
        },
        ...data
    ]
    return (<div className={"w-8/12"}>
        <div className="w-full flex flex-col items-center h-[90vh] bg-red-50 ">
            <div className={"w-1/2 my-8"}>
                <SelectLocation locations={data} store={searchParams.store} />
            </div>
            <div className="w-6/12">
                <LocationCard store={searchParams.store}>

                </LocationCard>
            </div>
            <div className="w-6/12">
                <FormNewLocation store={searchParams.store} />
            </div>
            <DeleteLocationButton store={searchParams.store} />
            <UpdateLocation>
                <FormUpdateLocation store={searchParams.store}/>
            </UpdateLocation>
        </div>
    </div>
    )
}

export default LocationsPage;