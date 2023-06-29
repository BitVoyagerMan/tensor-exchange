
import { gql } from '@apollo/client';


export const SIGNUP_MUTATION = gql `mutation signup($username: String!, $password: String!, $email: String!) {
    signup(data: {
      username: $username,
      password: $password,
      email: $email
    }) {
      id
      username
      email
      is_verified
    }
  }`;


export const LOGIN_MUTATION = gql `mutation login($username: String!, $password: String!) {
    login(data: {
      username: $username,
      password: $password
    }) 
  }`;

export const GET_USER_MUTATION = gql `mutation currentUser($userId:Float!){
                    currentUser(userId:$userId)
                    {
                        id
                        username
                        email
                    }
                }`