import React from "react";
import Header from "@/app/dashboard/_components/Header";
import Sidebar from "@/app/dashboard/_components/_sidebar/Sidebar";

export default function LayoutDashboard({children, locations}:
                                        Readonly<{ children: React.ReactNode, locations: React.ReactNode }>) {
    return (
        <div className="bg-orange-50">
            <Header></Header>
            <div className={"flex flex-row items-center"}>
                <Sidebar></Sidebar>
                {children}
                {locations}
            </div>
        </div>
    )
}