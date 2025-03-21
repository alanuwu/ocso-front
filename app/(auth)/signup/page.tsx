import {Button, Input} from "@nextui-org/react";
import Link from "next/link";

export default function SignupPage() {
    return (
        <>
            <div className={"bg-orange-700 px-10 py-2 rounded-md"}>
                <p className={"text-2xl my-4 text-white"}>Registrarse</p>
                <div className={"flex flex-col gap-2 my-4 items-center justify-center"}>
                    <Input placeholder="Email" type="email" isRequired={true} size="sm"/>
                    <Input placeholder="Contraseña" type="password" isRequired={true} size="sm"/>
                    <Input placeholder="Repetir Contraseña" type="password"  isRequired={true} size="sm"/>
                </div>
                <div className={"flex flex-col items-center gap-2"}>
                <Button color="primary" className={"text-center"}>Registrarse</Button>
                <p className={"text-white"}>¿Ya tienes una cuenta? <Link href={"/login"} className={"text-orange-200 underline"}>Inicia Sesion</Link></p>
                </div>
            </div>

        </>
    )
}