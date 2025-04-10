'use client'
import { Select, SelectItem } from "@nextui-org/react"
import { Manager, Location } from "@/entities"

export default function SelectManager({ managers, locations }: { managers: Manager[], locations: Location[] }) {
    const disabledKeys = locations.map((location: Location) => {
        return location.manager?.managerId
    }).filter((managerId) => managerId !== undefined)
    return (
        <Select 
            name="manager" 
            label="Manager" 
            disabledKeys={disabledKeys} 
            className="bg-white rounded-lg" 
            popoverProps={{ className: "bg-white rounded-lg" }}
        >
            {
            managers.map((manager: Manager) => {
            return (
            <SelectItem key={manager.managerId}>
                {manager.managerFullName}
            </SelectItem>
            )
            })
            }
        </Select>
    )
}