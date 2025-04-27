"use client"
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";
import { API_URL } from "@/constants";
import { Spinner } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [submitting, setSubmitting] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setSubmitting(true);

        let authData = {
            userEmail: userEmail,
            userPassword: userPassword,
        };

        console.log("Datos enviados:", authData);

        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(authData),
                credentials: 'include'
            });
            console.log("Respuesta completa:", response);

            if (response.status === 201) {
                setSubmitting(false);
                router.push('/dashboard?store=1');
            } else {
                console.error("Error en la autenticación, código de estado:", response.status);
                setSubmitting(false);
            }
        } catch (error) {
            console.error("Error en la autenticación:", error);
            setSubmitting(false);
        }
    };

    return (
        <form className="bg-orange-500 px-10 py-2 rounded-md" onSubmit={handleSubmit}>
            <div className="bg-orange-700 px-10 py-2 rounded-md max-w-screen-2xl">
                <p className="text-2xl my-4 text-white">Iniciar Sesión</p>
                <div className="flex flex-col gap-2 my-4 items-center justify-center">
                    <Input
                        placeholder="Email"
                        name="userEmail"
                        type="email"
                        isRequired
                        size="sm"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                    />
                    <Input
                        placeholder="Contraseña"
                        name="userPassword"
                        type="password"
                        isRequired
                        size="sm"
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                    />
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Button color="primary" className="text-center" type="submit" disabled={submitting}>
                        {submitting ? <Spinner size="md" /> : "Iniciar Sesión"}
                    </Button>
                    <p className="text-white">
                        ¿No tienes una cuenta?{" "}
                        <Link href="/signup" className="text-orange-200 underline">
                            Regístrate
                        </Link>
                    </p>
                </div>
            </div>
        </form>
    );
}