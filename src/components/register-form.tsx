import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function RegisterForm({
    className,
    onClick,
    ...props
}: React.ComponentProps<"form"> & { onClick: () => void }) {
    return (
        <form className={cn("flex flex-col gap-3", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-xl font-bold">Criar uma conta</h1>
                <p className="text-muted-foreground text-sm text-balance">
                    Preencha os campos abaixo para criar sua conta
                </p>
            </div>
            <div className="grid gap-6">
                <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="username">Nome</Label>
                    <Input id="username" type="text" placeholder="your-username" required />
                </div>
                <div className="grid gap-3">
                    <div className="flex items-center">
                        <Label htmlFor="password">Senha</Label>
                    </div>
                    <Input id="password" type="password" required />
                </div>
                <div className="grid gap-3">
                    <div className="flex items-center">
                        <Label htmlFor="confirm-password">Confirmar senha</Label>
                    </div>
                    <Input id="confirm-password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                    Criar conta
                </Button>
            </div>
            <div className="flex m-auto gap-1 text-center text-sm">
                Já tem uma conta?
                <a
                    href="#"
                    className="underline underline-offset-4"
                    onClick={onClick}
                >
                    Logar
                </a>
            </div>
        </form>
    );
}
