import { Button, Checkbox, TextField as Field } from "@mui/material"
import Link from "next/link"
import { Dispatch, SetStateAction, useState } from "react"
import signupImage from "../images/Sign Up.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useRouter } from 'next/router'
import useLocalStorage from "use-local-storage";

const TextField = ({label, value, setValue, password = false}: {label: string, value: string, setValue: Dispatch<SetStateAction<string>>, password?: boolean}) => {
 
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  
  return <Field type={password ? "password" : "text"} onChange={(e) => handleChange(e as React.FormEvent<HTMLInputElement>)} sx={{
          "& label": {
            color: "gray"
          }
        }} InputProps={{className: "text-white"}} value={value} label={label} className="bg-[#041616] w-full">
        </Field>
}

export default function login () {

  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useLocalStorage<any>("user", {})
  const handleSubmit = () => {
    if (!email || !password) {
      return toast.error("All fields are requied")
    }
    if (password.length < 8) {
      return toast.error("Password length must be minimum of 8 characters")
    }
    axios.post(process.env.NEXT_PUBLIC_BACKEND + "/api/auth/local", {
      identifier: email, 
      password
    }).then(resp => {
      if (typeof window !== "undefined") {
        console.log(resp)
        setUser(resp.data)  
        router.push("/")
     } 
    }).catch(err => {
      console.log(err)
      return toast.error(err.response.data.error.message)
    })
  }

  return <div className="w-full h-screen relative">
    <ToastContainer theme={"colored"}/>
    <img src={signupImage.src} className="w-full h-full absolute" />
    <div className="relative z-10 w-full h-full flex">

    <div className="w-1/2 h-full flex justify-center items-center">
      <div className="w-[400px] h-[300px] flex flex-col justify-around">
        <p className="text-white text-3xl uppercase text-center"> Sign In </p>
        <TextField value={email} setValue={setEmail} label="email or username"></TextField>
        <TextField password={true} value={password} setValue={setPassword} label="password"></TextField>
        <Button onClick={handleSubmit} className="bg-primary-main w-full" variant="contained"> Login </Button>
        <p className="text-white text-center text-sm"> 
          Don't have an account ? 
          <Link href={"/sign-up"}> <span className="text-primary-main"> Register </span> </Link>
        </p>
      </div>
    </div>
    <div className="w-1/2 h-full">
      <p className="text-3xl font-bold text-white uppercase mt-12 mb-4 text-center"> fastobux is that easy for everyone </p>
      <p className="text-center text-white">
        You can buy and sell as many as Robux as you want.The prices will be as  productive.Believe it or not!Fastobux is a universe.
      </p>
    </div>
    </div>
  </div>
}
