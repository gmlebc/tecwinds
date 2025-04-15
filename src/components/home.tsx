import { useState } from "react";
import { LoginForm } from "@/components/login-form";
import { RegisterForm } from "@/components/register-form";
import { CloudRainWind } from 'lucide-react';

export default function Home() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="flex min-h-screen b-0 ">

            <div className="flex-1 flex flex-col md:p-10 content-center justify-evenly items-center ">
                <div className="flex justify-center gap-2 md:justify-start ">
                    <a href="#" className="flex items-center text-2xl font-bold ">
                        TechWinds
                        <CloudRainWind className="stroke-2 size-15" />
                    </a>
                </div>
                <div className="flex flex- items-center justify-center">
                    <div className="w-full max-w-xs">
                        {isLogin ? (
                            <LoginForm
                                className="border border-secundary rounded-2xl p-6"
                                onClick={() => setIsLogin(false)}
                            />
                        ) : (
                            <RegisterForm
                                className="border border-secundary rounded-2xl p-4"
                                onClick={() => setIsLogin(true)}
                            />
                        )}
                    </div>
                </div>
            </div>


            <div className="relative hidden lg:block overflow-y-hidden flex-1 ">
                
                <img
                    src="14.jpg"
                    alt="Image"
                    className="rounded-sm absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale grayscale-80"
                />
                <div className="absolute right-0 inset-0 -left-1 z-10 bg-gradient-to-r from-white via-transparent from-10% to-transparent to-110% opacity-100"></div>
            </div>
            <div className="lg:block hidden absolute flex items-center  m-auto z-11 center top-50 right-40 text-lg text-shadow-2xs font-bold p-10 tracking-wide leading-10 text-center border bg-white rounded-2xl w-100 shadow-2xl shadow-xl/30 inset-shadow-2xl">
                    <p>Nossa plataforma climática do Lago de Furnas com gráficos interativos e alertas em tempo real sobre ventos extremos, garantindo mais segurança à navegação nos 30 municípios da região.</p>
                </div>

        </div>
    );
}
