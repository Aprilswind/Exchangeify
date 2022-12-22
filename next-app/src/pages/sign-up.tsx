import { Button, TextField as Field } from "@mui/material"
import Link from "next/link"
import { Dispatch, SetStateAction, useState } from "react"
import signupImage from "../images/Sign Up.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import * as EmailValidator from 'email-validator';
import { useRouter } from 'next/router'

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

export default function signup () {
  const router = useRouter()
  
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [ confirmPassword, setConfirmPassword ] = useState("")

  const handleSubmit = () => {
    if (!username || !email || !password || !confirmPassword) {
      return toast.error("All fields are requied")
    }
    if(!EmailValidator.validate(email)) {
      return toast.error("Invalid email")
    }
    if (password !== confirmPassword) { 
      return toast.error("Password does not match")
    }
    if (password.length < 8) {
      return toast.error("Password length must be minimum of 8 characters")
    }
    axios.post(process.env.NEXT_PUBLIC_BACKEND + "/api/auth/local/register", {
      username,
      email, 
      password
    }).then(_ => router.push("/")).catch(err => {
      return toast.error(err.response.data.error.message)
    })
  }

  return <div className="w-full h-screen relative">
    <ToastContainer theme={"colored"}/>
    <img src={signupImage.src} className="w-full h-full absolute" />
    <div className="relative z-10 w-full h-full flex">

    <div className="w-1/2 h-full flex justify-center items-center">
      <div className="w-[400px] h-[400px] flex flex-col justify-around">
        <p className="text-white text-3xl uppercase text-center"> sign up </p>
        <TextField value={username} setValue={setUsername} label="username"></TextField>
        <TextField value={email} setValue={setEmail} label="email"></TextField>
        <TextField password={true} value={password} setValue={setPassword} label="password"></TextField>
        <TextField password={true} value={confirmPassword} setValue={setConfirmPassword} label="confirm password"></TextField>
        <Button onClick={handleSubmit} className="bg-primary-main w-full" variant="contained"> sign up </Button>
        <p className="text-white text-center text-sm"> 
          Already have an account ? 
          <Link href={"/sign-in"}> <span className="text-primary-main"> login </span> </Link>
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
