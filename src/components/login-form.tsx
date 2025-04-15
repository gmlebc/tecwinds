import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm({
  className,
  onClick, // Função para alternar para o RegisterForm
  ...props
}: React.ComponentProps<"form"> & { onClick: () => void }) {
  return (
    <form className={cn("flex flex-col gap-6 shadow-2xl shadow-xl/30 inset-shadow-2xl", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-xl font-bold">Logar com sua conta</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Insira seu e-mail abaixo para fazer login em sua conta
        </p>  
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="tecwinds@example.com" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Senha</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Esqueceu sua senha?
            </a>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
      <div className="flex m-auto gap-1 text-center text-sm">
        Não tem cadastro?
        <a
          href="#"
          className="underline underline-offset-4"
          onClick={onClick} // Alterna para o RegisterForm
        >
          Cadastre aqui!
        </a>
      </div>
    </form>
  );
}
