import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import useLocalStorage from 'use-local-storage'
import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const myColors = require("../../themeOveride.js")
const theme = createTheme({
  palette: myColors
})
export default function App({ Component, pageProps }: AppProps) {
  const [user] = useLocalStorage<any>("user", {})
  useEffect(() => {
   if(user.user) {
    toast.success(`Signed in as ${user.user.username}`) 
   } 
  }, [user])
  return <>
    <ThemeProvider theme={theme}>
      <ToastContainer theme={"colored"}/>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
}
