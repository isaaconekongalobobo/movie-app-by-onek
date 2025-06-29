"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SignInButton, SignUp, useUser } from "@clerk/nextjs"
import { redirect } from 'next/navigation'
import { useForm } from "react-hook-form"
import Link from "next/link"
import { useEffect, useState } from "react"
import GoogleSignInBtn from "./googleSignInBtn"
import axios from "axios"
import { SmallLoadingSpinner } from "./smallLoadingSpinner"
import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from 'next/navigation';

interface formType {
  email: string,
  password: string
}

export function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState({ error: false, message: "" })
  const [userConnected, setUserConnected] = useState<any>(null);
  const router = useRouter();

  // Récuperation de l'utilisateur connecté via la méthode classique
  useEffect(() => {
    const userStr = sessionStorage.getItem("user");
    if (userStr) {
      setUserConnected(JSON.parse(userStr));
    }
  }, []);

  const { isSignedIn } = useUser()
  if (isSignedIn || userConnected) {
    redirect('/home')
  }

  const { handleSubmit, register } = useForm<formType>()
  const OnFormSubmit = async (data: formType) => {
    setLoading(true)
    axios.post ("/api/login", data)
    .then((response) => {
      setError({ error: false, message: "" })
      if (response.data.success) {
        sessionStorage.setItem("user", JSON.stringify(response.data.user));
      }
      router.push('/home');
    }).catch((error) => {
      setError({ error: true, message: "Email ou mot de passe incorrecte" })
    })
    .finally(() => setLoading(false))
  }
  
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Connectez vous pour continuer</CardTitle>
          <CardDescription>
            Utiliser mon compte Google
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(OnFormSubmit)}>
            <div className="grid gap-6">
              <GoogleSignInBtn/>
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-background px-2 text-muted-foreground">Ou</span>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input {...register("email")} id="email" type="email" placeholder="m@example.com" required/>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Mot de passe</Label>
                    <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline hover:text-[#FF0800] hover:opacity-80  " >
                      Mot de passe oublié ?
                    </a>
                  </div>
                  <Input {...register("password")} id="password" type="password" required />
                </div>
                <AnimatePresence>
                  {
                    loading && 
                    <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="flex justify-center">
                      <SmallLoadingSpinner/>
                    </motion.div>   
                  }
                </AnimatePresence>
                <AnimatePresence>
                  {
                    error.error && 
                    <motion.span initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="flex justify-center text-center text-red-700 ">
                      { error.message }
                    </motion.span>   
                  }
                </AnimatePresence>

                <Button disabled={loading} type="submit" className="w-full"> { loading ? "Connexion..." : "Se connecter" }</Button>
              </div>
              <div className="text-center text-sm">
                Vous n'avez pas de compte ?
                <Link href="/SignIn" className="underline underline-offset-4">
                  Créer un compte
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
