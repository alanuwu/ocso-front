import React from "react";
import Header from "@/app/dashboard/_components/Header";
import Sidebar from "@/app/dashboard/_components/_sidebar/Sidebar";

export default function LayoutDashboard({children, count}:
                                        Readonly<{ children: React.ReactNode, count: React.ReactNode }>) {
    return (
        <div className="bg-orange-50">
            <Header></Header>
            <div className={"flex flex-row items-center"}>
                <Sidebar></Sidebar>
                {count}
                {children}
            </div>
        </div>
    )
}