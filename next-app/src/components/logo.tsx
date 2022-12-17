import logo from "../images/Group 1.svg"
export default function Logo ({className = ""}: {className?: string}) {
    return <div className={`flex items-center ${className}`}>
        <img src={logo.src}/>
        <span className="mx-2"></span>
        <span className="text-white text-xl font-bold"> Exchangify </span>
    </div>
}
