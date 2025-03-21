"use client"
import {ReactNode} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
interface NavItemProps {
    icon: ReactNode
    path: string
}

export const NavItem = ({icon, path}: NavItemProps) => {
    const pathName = usePathname()
    console.log(pathName);
    return (
        <Link href={path} className={pathName === path ? "bg-orange-700" : ""}>
        {icon}
        </Link>

    );

}

export default NavItem;