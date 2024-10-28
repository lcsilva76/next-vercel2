"use client"

import { useAuth } from "@/context"

export default function Tabela() {
  
  const {user} = useAuth()


  if(user?.nome == ""){
    alert("Para fazer compras, faça antes o login")
    window.location.assign('/')
  }
  
    
      return (
        <div className="h-96 w-screen flex justify-center items-center">
            <p className="text-3xl font-black">Olá {user?.nome}, faça suas compras!</p>
        </div>
      )
    
}
