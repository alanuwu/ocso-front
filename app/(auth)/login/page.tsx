"use client"
import {Button, Input} from "@nextui-org/react";
import Link from "next/link";
import {ReactEventHandler, useState} from "react";
import axios from "axios";
import {API_URL} from "@/constants";
import {Spinner} from "@heroui/react";
import {useRouter} from "next/navigation";


export default function LoginPage() {
    const [submitting, setSubmitting] = useState(false)
    const router  = useRouter();


    const handleSubmit = async (e: React.FormEvent) => {
        setSubmitting(true)
        e.preventDefault();
        const formData = new FormData(e.target);
        let authData: any = {}
        authData.userEmail = formData.get("userEmail");
        authData.userPassword = formData.get("userPassword");
        console.log(authData);
        try {
            const response = await axios.post(`${API_URL}/auth/login`, {
                ...authData,
            }, {
                withCredentials: true,
            });
            if(response.status === 201) router.push('/dashboard');
            setSubmitting(false)
        } catch (e) {
            setSubmitting(false)
        }
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
                    <Button color="primary" className={"text-center"} type={"submit"}
                            disabled={submitting}>{submitting ? "Enviando..." : "Iniciar Sesión"}</Button>
                    <p className={"text-white"}>¿No tienes una cuenta? <Link href={"/signup"}
                                                                             className={"text-orange-200 underline"}>Registrate</Link>
                    </p>
                </div>
            </div>
        </form>

    )
}