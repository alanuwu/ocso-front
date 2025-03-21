import React from "react";
import Header from "@/app/dashboard/_components/Header";
import Sidebar from "@/app/dashboard/_components/_sidebar/Sidebar";
export default function LayoutDashboard({children}: Readonly<{children: React.ReactNode}>){
    return(
        <div className="bg-orange-50">
            <Header></Header>
            <div className={"flex flex-row items-center"}>
            <Sidebar></Sidebar>
            {children}
            </div>
        </div>
    )
}