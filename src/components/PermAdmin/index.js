import jwt_decode from 'jwt-decode'
import {useState}from 'react';
import { Route,useHistory } from "react-router";

import Admin from '../Admin'
import Page404 from '../Page404';


export default function PermAdmin(){

    const history = useHistory();

    const token =  localStorage.getItem("token")
    const dataToken = jwt_decode(token)

    if(dataToken.role === "admin"){
        return(
            <Admin/>
        )
    } 
    
    return(
        history.push("/")
    )
}