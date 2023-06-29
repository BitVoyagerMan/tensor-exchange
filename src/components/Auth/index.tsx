import { useEffect } from "react";
import { useRouter } from 'next/router'

const noAuthPath = [
    '/verifyEmail'
]

function Auth({children}) {
    const router = useRouter();
    const pathname = router.pathname;
    console.log(router.pathname)
    useEffect(() => {
        console.log(router.pathname);
        const token = localStorage.getItem('token');
        const expiresAt = localStorage.getItem('expiresAt');
        if(noAuthPath.indexOf(pathname)) {

        }else{
            if(!token || !expiresAt || new Date(expiresAt) < new Date()) {
                router.replace('/login');
            }    
        }
        
    }, [])

    return (
        <>
        {children}
        </>
    )
}

export default Auth;