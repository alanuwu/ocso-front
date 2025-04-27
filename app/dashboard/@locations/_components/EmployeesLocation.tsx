import {Employee} from "@/entities";
import {API_URL, TOKEN_NAME} from "@/constants";
import {cookies} from "next/headers";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { AuthHeaders } from "@/helpers/authHeaders";

export default async function EmployeesLocation({store}: {store: string | string[] | undefined}) {
    const response = await fetch(`${API_URL}/employees/location/${store}`, {
        method: "GET",
        headers: {
            ...AuthHeaders()
        },
        next: {
            tags: ["dashboard:locations", "dashboard:locations:employees"]
        }
    })
    const data: Employee[] = await response.json();
    return data?.map((employee: Employee) => {
        const fullName = employee.employeeName + " " + employee.employeeLastName;
        return( <Card>
        <CardHeader>
            <p className={"w-full"}>Nombre: <b> {fullName} </b> </p>
            <p className={"w-full"}>Email: <b> {employee.employeeEmail}</b> </p>
            <p className={"w-full"}>Telefono: <b> {employee.employeePhoneNumber}</b> </p>
        </CardHeader>

                <CardBody>

                </CardBody>
        </Card>
        )
    })

}