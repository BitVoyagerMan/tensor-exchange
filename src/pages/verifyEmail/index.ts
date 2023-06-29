import { useRouter } from "next/router";
import { useEffect } from "react";
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { useQuery, useMutation } from "@apollo/client";
import {SIGNUP_MUTATION} from '../../graphql/mutations';
import { VERIFY_TOKEN } from "src/graphql/queries";
import { redirect } from "next/dist/server/api-utils";



export default function VerifyEmail() {
    const router = useRouter()

    const token = router.query.token;
    
    if(typeof(token) == "string"){
        localStorage.setItem('token', token);
    }
    try{
        const {loading, error, data } = useQuery(VERIFY_TOKEN);
        
        console.log(data.verifyToken);
        
        if(data.verifyToken == true){
            localStorage.setItem('token', null);
            router.replace('/login')}
    } catch{
        console.log("failed");
        // router.replace('/signup');
    }
    
    
}