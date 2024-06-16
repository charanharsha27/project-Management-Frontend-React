import api from "@/config/api";
import { FETCH_CHAT_BY_PROJECT_FAILURE, FETCH_CHAT_BY_PROJECT_REQUEST, FETCH_CHAT_BY_PROJECT_SUCCESS, FETCH_CHAT_MESSAGES_FAILURE, FETCH_CHAT_MESSAGES_REQUEST, FETCH_CHAT_MESSAGES_SUCCESS, SEND_MESSAGE_FAILURE, SEND_MESSAGE_REQUEST, SEND_MESSAGE_SUCCESS } from "./ActionType"

export const sendMessage = (messageData) => async(dispatch) =>{
    dispatch({type:SEND_MESSAGE_REQUEST})
    try {
        const response = await api.post("/api/message/create-message",messageData);
        console.log("message sent -> ",response.data)
        dispatch({type:SEND_MESSAGE_SUCCESS,message:response.data})
    } catch (error) {
        dispatch({
            type : SEND_MESSAGE_FAILURE,
            error : error.message
        })
        console.log(error);
    }
}

export const fetchChatByProjectId = (projectId) => async(dispatch)=>{
    dispatch({type:FETCH_CHAT_BY_PROJECT_REQUEST});
    try {
        const response = await api.get(`/api/project/getchat/${projectId}`)
        dispatch({type:FETCH_CHAT_BY_PROJECT_SUCCESS,chat:response.data})    
    } catch (error) {
        dispatch({
            type : FETCH_CHAT_BY_PROJECT_FAILURE,
            error : error.message
        })
        console.log(error);
    }
}

export const fetchChatMessages = (chatId)  => async(dispatch) => {
    dispatch({type:FETCH_CHAT_MESSAGES_REQUEST}); 
    try {
        const response = await api.get(`/api/message/chat/${chatId}`);
        dispatch({type:FETCH_CHAT_MESSAGES_SUCCESS,messages:response.data})
    } catch (error) {
        dispatch({type:FETCH_CHAT_MESSAGES_FAILURE,error:error.message})
        console.log(error);
    }
}

