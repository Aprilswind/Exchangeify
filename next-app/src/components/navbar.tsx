import { AppBar, Button, Toolbar } from "@mui/material";
import Logo from "./logo";
import { useRouter } from "next/router";
import useLocalStorage from "use-local-storage";
import { useEffect, useState } from "react";

export default function Navbar() { 
  const router = useRouter();
  const [user, setUser] = useState<any>({})
  const [User, setLUser] = useLocalStorage<any>("user", {});
  useEffect(() => {
    setUser(User) 
  }, [])

  return (
    <AppBar
      elevation={0}
      style={{ background: "transparent" }}
      className="w-full z-50"
    >
      <Toolbar className="flex justify-between w-full relative z-50">
        <div className="relative z-50 w-full h-full flex justify-between">
          <Logo />
          <div className="flex">
            { !user.user ? (
              <>
                {" "}
                <Button
                  onClick={() => router.push("/sign-in")}
                  variant="contained"
                  className="rounded-lg bg-primary-main"
                >
                  sign in
                </Button>
                <div className="w-4"></div>
                <Button
                  onClick={() => router.push("/sign-up")}
                  variant="outlined"
                  className="rounded-lg bg-[#283440] text-white"
                >
                  sign up
                </Button>{" "}
              </>
            ) : (
              <>
                <Button className="rounded-lg" variant="outlined" onClick={() => router.push("/dashboard")}> { user.user.username } | dashboard </Button>
                <div className="w-4"></div>
                <Button onClick={() => {
                  if (typeof window !== undefined) {
                    setLUser({})
                    router.reload()
                  }
                }} className="bg-primary-main rounded-lg" variant="contained"> 
                  sign out
                </Button>
              </>
            )}
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
