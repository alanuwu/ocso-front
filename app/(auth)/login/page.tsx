"use client"
import {Button, Input} from "@nextui-org/react";
import Link from "next/link";
import {ReactEventHandler} from "react";
import axios from "axios";
import {API_URL} from "@/constants";


export default function LoginPage() {
    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        let authData: any = {}
        authData.userEmail = formData.get("userEmail");
        authData.userPassword = formData.get("userPassword");
        console.log("pene")
        console.log(authData);
        const {data} = await axios.post(`${API_URL}/auth/login`, {
            userEmail: authData.userEmail,
            userPassword: authData.userPassword,
        })
        console.log(data)
        return;
    }
    return (
        <form className={"bg-orange-500 px-10 py-2 rounded-md"} onSubmit={handleSubmit}>

            <div className={"bg-orange-700 px-10 py-2 rounded-md max-w-screen-2xl"}>
                <p className={"text-2xl my-4 text-white"}>Iniciar Sesion</p>
                <div className={"flex flex-col gap-2 my-4 items-center justify-center"}>
                    <Input placeholder="Email" name="userEmail" type="email" isRequired={true} size="sm"/>
                    <Input placeholder="Contraseña" name="userPassword" type="password" isRequired={true} size="sm"/>
                </div>
                <div className={"flex flex-col items-center gap-2"}>
                    <Button color="primary" className={"text-center"} type={"submit"}>Iniciar Sesion</Button>
                    <p className={"text-white"}>¿No tienes una cuenta? <Link href={"/signup"}
                                                                             className={"text-orange-200 underline"}>Registrate</Link>
                    </p>
                </div>
            </div>
        </form>

    )
}