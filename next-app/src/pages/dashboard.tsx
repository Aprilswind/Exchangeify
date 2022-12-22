import { Container } from "@mui/material";
import Navbar from "../components/navbar";
import dashboardGroup from "../images/Dashboard.png"
import icon1 from "../images/Icon.png"
import icon2 from "../images/Icon (1).png"
import icon3 from "../images/Icon (2).png"
import useLocalStorage from "use-local-storage";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function dashboard () {
  const router = useRouter()
  const [user] = useLocalStorage<any>("user", {})
  useEffect(() => {
   if(!user.user) { 
    router.push("/sign-in") 
   } 
  }, [user])
  const data1 = [
      {
        label: "Robux Bought",
        data: 100,
        icon: icon3.src
      }, {
        label: "Robux Sold",
        data: 100,
        icon: icon1.src
      }, {
        label: "Money Earned",
        data: 100,
        icon: icon1.src
      }, {
        label: "Money Spent",
        data: 100,
        icon: icon2.src
      }
    ]
  return user.user && <div className="relative w-full h-screen">
    <img src={dashboardGroup.src} className="w-full h-full absolute"/>
    <Navbar />
    <div className="h-14"></div>
    <Container className="w-full h-[calc(100%-56px)] py-12">
      <div className="w-full h-full relative z-20">
        <div>
          <p className="text-white text-4xl font-bold"> Dashboard </p>
        </div>
        <div className="w-full flex h-[100px] my-12">
          {data1.map((data, i) => <div className="flex w-1/4 h-full mx-2 border-2 border-primary-main rounded-lg bg-[#192026]" key={i}>
            <div className="h-full w-1/3 flex justify-center items-center">
            <img className="w-2/3 object-contain" src={data.icon} />
            </div> 
            <div className="h-full w-2/3 flex flex-col justify-center items-center">
              <p className="text-white text-xl font-bold"> {data.label} </p>
              <p className="text-white font-bold text-4xl"> ${data.data} </p>
            </div> 
          </div>)}
        </div>
      </div>
    </Container>
  </div>
}
