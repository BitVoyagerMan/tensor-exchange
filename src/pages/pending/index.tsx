import { sign } from "crypto";
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useReducer } from "react"
import Layout from "src/components/Layout"
export default function Pending(){
    const router = useRouter();
    useEffect(() => {
        //Check expiresAt
        const expiresAt:String = localStorage.getItem('expiresAt');
        const signupPending = localStorage.getItem('signupPending');
        // if(expiresAt){
        //     console.log(expiresAt, Date.now()/ 1000)
        //     if(Number(expiresAt) > Date.now()/1000){
        //         router.replace('/')
        //     }
        // }
        if(signupPending == "false"){
            router.replace('/');
        }
    })
    return (
        <Layout title = "Login">
            <div className = "flex flex-col m-4 align-middle items-center">
            <div className="flex text-[36px] m-4">Please check your mailbox. We sent email for verification. </div>       
            <button  className=" py-[6px] flex items-center justify-items-center focus:outline-none   border-[1px] bg-[#198754] border-[#198754] px-[12px] rounded-[0.25rem] focus:border[#0a58ca] text-white focus:shadow-[0_0_0_0.25rem_rgba(13,110,253,.25)]">
                            Resend Email
            </button>
            </div>
            
        </Layout>
    )
}