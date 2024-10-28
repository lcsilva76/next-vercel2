"use client"
// import { AuthContext } from "@/context";
// import { useContext } from "react";

import {useAuth } from "@/context";
import { FormEvent, useState } from "react";


export default function Home() {

  // const {user, login, logout} = useContext(AuthContext);
  const {user, login, logout} = useAuth();

  const [dados, setDados] = useState({nome:'',senha:''})
     
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = e.target
    setDados({...dados, [name]:value})
  }

  const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    login(dados)
  }

  return (
   <div className="flex flex-col justify-center items-center p-10">
     <span className="text-2xl">{user?.nome == ''? "Fazer o Login" : user?.nome}</span>
     {user?.nome == ''? "" : (<button className="rounded-md bg-red-600 text-white p-2" onClick={logout}>Deslogar</button>)}
    
    <h1 className="text-3xl font-black mt-14 mb-24">Home Page</h1>
    <form className="w-96 border border-indigo-950 p-6" onSubmit={handleSubmit}>
      <div className="py-2">
        <input className="border-2 border-gray-400 p-2 w-full rounded-md" type="text" placeholder="Usuário" name="nome" value={dados.nome}
        onChange={handleChange} />
      </div>
      <div className="py-2">
        <input className="border-2 border-gray-400 p-2 w-full rounded-md" type="password" placeholder="Senha" name="senha" value={dados.senha}
        onChange={handleChange} />
      </div>
      <button className="block ms-auto  py-2 px-6 bg-indigo-700 rounded-md text-white text-lg font-bold">Logar</button>
    </form>
  </div>
  );
}
