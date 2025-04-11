import { useState } from "react";
import { LoginForm } from "@/components/login-form";
import { RegisterForm } from "@/components/register-form";
import { CloudRainWind } from 'lucide-react';

export default function Home() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="flex min-h-screen b-0 ">

            <div className="flex-1 flex flex-col md:p-10 content-center justify-evenly items-center">
                <div className="flex justify-center gap-2 md:justify-start ">
                    <a href="#" className="flex items-center text-2xl font-bold ">
                        TecWinds
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


            <div className="relative hidden lg:block overflow-y-hidden flex-1">
                <img
                    src="14.jpg"
                    alt="Image"
                    className="rounded-sm grayscale-10 absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
                <div className="absolute inset-0 -left-1 z-999 bg-gradient-to-r from-white via-transparent via-30% to-black to-110% opacity-100"></div>
            </div>

        </div>
    );
}
