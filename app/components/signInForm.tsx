"use client"

import React from 'react';
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { redirect } from 'next/navigation'
import { useForm } from "react-hook-form"
import Link from 'next/link';

interface formType {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

const SignInForm = () => {
    const { handleSubmit, register } = useForm<formType>()
    const OnFormSubmit = (data: formType) => {
        const { firstName, lastName, email, password } = data
        alert (firstName + lastName)
      }
    return (
        <div className={cn("flex flex-col gap-6")}>
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Créer un compte</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(OnFormSubmit)}>
              <div className="grid gap-6">
                <div className="grid gap-6">
                    
                    <div className="grid gap-2">
                        <Label htmlFor="firstName">Prenom</Label>
                        <Input {...register("firstName")} id="firstName" type="text" placeholder="Jhon" required/>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="lastName">Nom de famille</Label>
                        <Input {...register("lastName")} id="lastName" type="text" placeholder="Doe" required/>
                    </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input {...register("email")} id="email" type="email" placeholder="m@example.com" required/>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Mot de passe</Label>
                    <Input {...register("password")} id="password" type="password" required />
                  </div>
                  <Button type="submit" className="w-full">S'enregistrer</Button>
                </div>
                <div className="text-center text-sm">
                  Vous avez dèja un compte ? <Link href="/">Se connecter</Link>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
}

export default SignInForm;
