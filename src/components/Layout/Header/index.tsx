import Link from "next/link"
import { useEffect, useState } from "react"
import { ApolloClient, HttpLink, InMemoryCache, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useQuery, useMutation } from "@apollo/client";
import {GET_USER_MUTATION} from '../../../graphql/mutations';
export default function () {

    const [signFlag, setSignFlag] = useState(false);

    const [get_user_mutation, {error, data} ] = useMutation(GET_USER_MUTATION);
    async function getUserInfo(){
        const { data } = await get_user_mutation({
            variables: {
            userId:72,
            }
          })
        return data;
    }
    function signOut(){
        localStorage.setItem('token', null);
        localStorage.setItem('expiresAt', null);
        localStorage.setItem('signupPending', null);
        setSignFlag(false);
    }
    useEffect(() => {
        const expiresAt:String = localStorage.getItem('expiresAt');
        const token:String = localStorage.getItem('token');
        if(expiresAt && token){
            console.log(expiresAt, Date.now())
            if(Number(expiresAt) > Date.now()){
                setSignFlag(true);
            }
        }
        // try{
        //     const data =  getUserInfo()
        //     console.log(data)
        // }
        // catch(e){

        // }
        // client.mutate({
        //     mutation: gql `
        //             mutation{
        //                 currentUser(userId:)
        //                 {
        //                     id
        //                     username
        //                     email
        //                 }
        //             }`
        // })
        // .then(data => {
        //     console.log(data)
        //     // localStorage.setItem('token', data)
        // })
        // .catch(error => console.error(error));
    })
    return(
        <div className=" bg-gradient-to-t from-[#212529]  p-[16px]  to-[#414548]">
            <div className="container mx-auto xl:max-w-[1140px] xxl:max-w-[1320px]">
                <div className = " flex flex-wrap justify-center lg:justify-start items-center p-[5px]   mx-auto  text-white font-normal text-[1.25rem] leading-6 box-border">
                    <Link href = "/">
                    <div className = "flex flex-row  mr-[1.0rem] items-center py-[0.3125rem]">
                        <img className=" h-[32px] w-[32px]" src = "data:image/png;base64,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" />
                        <div >&nbsp;Bittensor.Exchange</div>
                        <span className="p-[0.5rem] flex flex-row items-end ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className = "h-[16px] w-[16px]" viewBox="0 0 16 16">
                                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path>
                            </svg>
                        </span>
                    </div>
                    </Link>
                    <ul className="flex pl-3 justify-center lg:w-auto lg:mr-auto flex-wrap text-[16px]">
                        <Link href="/"><li className="p-[0.5rem]">Home</li></Link>
                        <Link href="#"><li className="p-[0.5rem]">My Orders</li></Link>
                        <Link href="#"><li className="p-[0.5rem]">Create Buy Order</li></Link>
                        
                        <Link href="#"><li className="p-[0.5rem]">Create Sell Order</li></Link>
                        <Link href="#"><li className="p-[0.5rem]">FAQ</li></Link>
                        <Link href="#"><li className="p-[0.5rem]">Stake with us!</li></Link>
                    </ul>
                
                    <div className="flex flex-row text-[16px]">
                        {signFlag == true?<img onClick={() => signOut()} className="w-10 h-10 rounded-full" src="avatar.png" alt="Rounded avatar"/>:
                            ""
                        }

                        {/* <img className="w-10 h-10 rounded-full" src="avatar.png" alt="Rounded avatar"/> */}
                        {signFlag == false?<Link href = "/login" className=" focus:shadow-[0_0_0_0.25rem_rgba(248,249,250,.5)] text-white hover:bg-white hover:text-black me-2 border-[1px] py-[6px] px-[12px] rounded-[4px]">Login</Link>:""}
                        {signFlag == false?<Link href = "/signup" className=" focus:shadow-[0_0_0_0.25rem_rgba(217,164,6,.5)] bg-[#ffc107] border-[#ffc107] hover:bg-[#ffcd39] hover:border-[#ffc720]  border-[1px] py-[6px] px-[12px] rounded-[4px] text-black">Sign-up</Link>:""}
                        
                    </div>

                </div>
            </div>
        </div>
    )
}