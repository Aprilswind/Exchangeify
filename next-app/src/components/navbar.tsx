import { AppBar, Button, Toolbar } from "@mui/material";
import Logo from "./logo";

export default function Navbar () {
    return <AppBar elevation={0} style={{background: "transparent"}} className="w-full"> 
        <Toolbar className="flex justify-between w-full">
           <Logo /> 
           <div className="flex">
                <Button variant="contained" className="rounded-lg bg-primary-main">
                    sign in
                </Button>
                <div className="w-4"></div>
                <Button variant="outlined" className="rounded-lg bg-[#283440] text-white">
                    sign up
                </Button>
           </div> 
        </Toolbar>
    </AppBar>
}
