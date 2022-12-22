import { useRouter } from "next/router"
import logo from "../images/Group 1.svg"

export default function Logo ({className = ""}: {className?: string}) {
    const router = useRouter()
    return <div onClick={() => router.push("/")} className={`flex items-center cursor-pointer ${className}`}>
        <img src={logo.src}/>
        <span className="mx-2"></span>
        <span className="text-white text-xl font-bold"> Exchangify </span>
    </div>
}
