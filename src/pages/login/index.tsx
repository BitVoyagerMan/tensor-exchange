import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useReducer, useState } from "react"

import { useQuery, useMutation } from "@apollo/client";
import Layout from "src/components/Layout"
import {LOGIN_MUTATION} from '../../graphql/mutations';
import { AppDispatch } from "src/redux/store";
import { useDispatch } from "react-redux";
import 'moment';

import { logIn, logOut } from "src/redux/features/auth-slice";
export default function Login(){
    const router = useRouter();
    useEffect(() => {
        //Check expiresAt
        
    })
    const dispatch = useDispatch<AppDispatch>();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login_mutation, {error, data} ] = useMutation(LOGIN_MUTATION);
    async function login(username, password) {
        
        if(username == ""  || password == "") {console.log("Please complete the form."); return;}

        
        console.log(username, password);
        const { data } = await login_mutation({
            variables: {
                username: username,
                password: password
            }
            });
        console.log(data.login)
        localStorage.setItem('token', data.login)
        const timeNow = Date.now();
        const expiresAt = timeNow + 3600 * 1000
        localStorage.setItem('expiresAt', expiresAt.toString());
        dispatch(logIn(username));
        router.replace('/')
        



    }
    return (
        <Layout title = "Login">
            
            <div className="container text-[1rem]  xl:max-w-[1140px] xxl:max-w-[1320px]  h-100 overflow-hidden">
                <h1 className="mb-[8px] text-[2.5rem] font-medium">Login</h1>
                <div className="flex flex-auto flex-row mt-[16px]">
                    <div className="flex flex-auto p-[10px] w-[30%]">
                        <input type="text" value={username} onChange={(e) => {setUsername(e.target.value)}} placeholder="Username" m-auto="true" className="flex-auto focus:outline-none border-[1px] rounded-[0.25rem] py-[0.375rem] px-[0.75rem] focus:border-[#86b7fe] focus:shadow-[0_0_0_0.25rem_rgba(13,110,253,.25)]"></input>
                    
                    </div>
                    <div className="flex flex-auto p-[10px] w-[30%]">
                        <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="Password" m-auto="true" className="flex-auto focus:outline-none border-[1px] rounded-[0.25rem] py-[0.375rem] px-[0.75rem] focus:border-[#86b7fe] focus:shadow-[0_0_0_0.25rem_rgba(13,110,253,.25)]"></input>

                    </div>
                    <div className="flex flex-auto p-[10px] w-[30%]">
                        <button onClick={() => login(username, password)} className="flex items-center justify-items-center focus:outline-none   border-[1px] bg-[#0b5ed7] border-[#0a58ca] px-[12px] rounded-[0.25rem] focus:border[#0a58ca] text-white focus:shadow-[0_0_0_0.25rem_rgba(13,110,253,.25)]">
                            Login
                        </button>
                    </div>
                    
                </div>
            </div>
        </Layout>
    )
}