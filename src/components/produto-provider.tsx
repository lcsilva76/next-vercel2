"use client"

import {createContext, useState} from 'react'

type Produto={
    nome:string;
    preco:number;
}
 
type Funcoes = {
    inserirProduto:()=>void
}

export const NumberContext = createContext<Produto>({} as Produto&Funcoes)

export function ProdutoContextProvider({children}:{children: React.ReactNode}){
    
    const [produtos, setProdutos] = useState<Produto[]>()
    
    const inserirProduto = ()=>{
        setProdutos(produtos)
    }
    

    return(
        <NumberContext.Provider value={{produtos, inserirProduto}}>
            {children}
        </NumberContext.Provider>
    )
}

