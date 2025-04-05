import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import axios from "axios";
import { cookies } from "next/headers";
import { Location } from "@/entities";
import { API_URL, TOKEN_NAME } from "@/constants";
import Link from "next/link";

export default async function LocationCard({ store }: { store: string | string[] | undefined }) {
    const token = cookies().get(TOKEN_NAME)?.value;
    
    const {data} = await axios.get<Location>(`${API_URL}/locations/${store}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return (
        <Card>
            <CardHeader>
                <p className="w-full"><b>{data.locationName}</b></p>
            </CardHeader>
            <Divider></Divider>
            <CardBody>
                <p className="w-full">Manager: <Link href={{pathname: `/dashboard/managers`}}><b> {data.manager?.managerFullName}</b> </Link></p>
            </CardBody>
        </Card>
    )
}