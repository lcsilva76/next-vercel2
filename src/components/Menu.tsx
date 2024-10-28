import Link from "next/link";

export default function Menu(){

    return(
        <nav className="bg-indigo-600 h-12 flex justify-center items-center">
            <ul className="flex gap-6">
                <li><Link className="font-black text-white" href={'/'}>Home</Link></li>
                <li><Link className="font-black text-white" href={'/compras'}>Compras</Link></li>
            </ul>
        </nav>
    )
}