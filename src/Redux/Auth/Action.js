import axios from "axios";
import { GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionTypes"
import { API_URL } from "@/config/api";

export const register = (userData) => async(dispatch)=>{
    dispatch({type:REGISTER_REQUEST})
    try{
        const {data} = await axios.post(`${API_URL}auth/signup`,userData);
        console.log(data);
        if(data.token){
            localStorage.setItem('jwt',data.token);
            dispatch({
                type : REGISTER_SUCCESS,
                payload : data
            })
            console.log("register success",data);
        }
    }
    catch(error){
        console.log(error);
    }
}

export const login = (userData) => async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    
    try{
        const {data} = await axios.post(`${API_URL}auth/login`,userData);
        console.log(data);
        if(data.token){
            localStorage.setItem('jwt',data.token);
            dispatch({
                type : LOGIN_SUCCESS,
                payload : data
            })
            console.log("login success",data);

        }
    }
    catch(error){
        console.log(error);
    }
}

export const getUser = () => async(dispatch)=>{
    dispatch({type:GET_USER_REQUEST})
    try{
        const {data} = await axios.get(`${API_URL}api/users/get-profile`,{
            headers:{
                "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
            }
        });
        console.log("user fetched",data);
            dispatch({
                type : GET_USER_SUCCESS,
                payload : data
            })
            console.log("login success",data);
        
    }
    catch(error){
        console.log(error);
    }
}

export const logout = () => async(dispatch) => {
    dispatch({type : LOGOUT})
    localStorage.clear();
}