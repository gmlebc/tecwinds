import { useState } from "react";
import { LoginForm } from "@/components/login-form";
import { RegisterForm } from "@/components/register-form";
import { CloudRainWind } from 'lucide-react';

export default function Home() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="grid min-h-svh lg:grid-cols-2 b-0 ">
            <div className="flex flex-col gap-4 p-6 md:p-10 ">
                <div className="flex justify-center gap-2 md:justify-start ">
                    <a href="#" className="flex items-center text-2xl font-bold">
                        TecWinds
                        <CloudRainWind className="stroke-2 size-15" />
                    </a>
                </div>
                <div className="flex flex-1 items-center justify-center ">
                    <div className="w-full max-w-xs ">
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
            <div className="relative hidden lg:block overflow-y-hidden">
                <img
                    src="14.jpg"
                    alt="Image"
                    className="rounded-sm grayscale-90 absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-white via-transparent to-white opacity-100"></div>
            </div>


        </div>
    );
}
