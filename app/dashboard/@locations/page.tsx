import { TOKEN_NAME } from "@/constants"
import axios from "axios";
import { cookies } from "next/headers";
import { Select, SelectItem } from "@heroui/react";
import { Location } from "@/entities";
import SelectLocation from "@/app/dashboard/@locations/_components/SelectLocation";

interface Props {
    searchParams: { [key: string]: string | string[] | undefined }
}
const LocationsPage = async ({searchParams}: Props) => {
    const userCookies = cookies()
    const token = userCookies.get(TOKEN_NAME)?.value
    let { data } = await axios.get<Location[]>("http://localhost:4500/locations", {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
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
        </div>
    </div>)
}

export default LocationsPage;