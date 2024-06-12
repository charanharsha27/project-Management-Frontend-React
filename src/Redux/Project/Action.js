import api from "@/config/api";
import { ACCEPT_INVITATION_REQUEST, ACCEPT_INVITATION_SUCCESS, CREATE_PROJECT_REQUEST, CREATE_PROJECT_SUCCESS, DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS, FETCH_PROJECTS_REQUEST, FETCH_PROJECTS_SUCCESS, FETCH_PROJECT_BY_ID_REQUEST, FETCH_PROJECT_BY_ID_SUCCESS, INVITE_TO_PROJECT_REQUEST, SEARCH_PROJECT_REQUEST, SEARCH_PROJECT_SUCCESS } from "./ActionTypes";


export const fetchProjects = ({category,tag})=> async(dispatch)=>{
    try {
        dispatch({type : FETCH_PROJECTS_REQUEST})
        const {data} = await api.get("/api/projects",{params:{category,tag}})
        console.log("all projects fetched",data);
        dispatch({type : FETCH_PROJECTS_SUCCESS,projects : data})
    } catch (error) {
        console.log(error);
    }
}

export const searchProjects = ({keyword})=> async(dispatch)=>{
    try {
        dispatch({type : SEARCH_PROJECT_REQUEST})
        const {data} = await api.get("/api/projects/search?keyword="+keyword);
        console.log("search projects fetched",data);
        dispatch({type : SEARCH_PROJECT_SUCCESS,projects : data})
    } catch (error) {
        console.log(error);
    }
}

export const createProjects = ({projectData})=> async(dispatch)=>{
    try {
        dispatch({type : CREATE_PROJECT_REQUEST})
        const {data} = await api.post("/api/projects/",projectData);
        console.log("create project success",data);
        dispatch({type : CREATE_PROJECT_SUCCESS,projects : data})
    } catch (error) {
        console.log(error);
    }
}

export const fetchProjectById = ({projectId})=> async(dispatch)=>{
    try {
        dispatch({type : FETCH_PROJECT_BY_ID_REQUEST})
        const {data} = await api.get("/api/projects/"+projectId);
        console.log("fetch project by id success",data);
        dispatch({type : FETCH_PROJECT_BY_ID_SUCCESS,projects : data})
    } catch (error) {
        console.log(error);
    }
}

export const deleteProject = ({projectId})=> async(dispatch)=>{
    try {
        dispatch({type : DELETE_PROJECT_REQUEST})
        const {data} = await api.delete("/api/projects/"+projectId);
        console.log("delete project by id success",data);
        dispatch({type : DELETE_PROJECT_SUCCESS,projectId})
    } catch (error) {
        console.log(error);
    }
}

export const inviteToProject = ({email,projectId})=> async(dispatch)=>{
    try {
        dispatch({type : INVITE_TO_PROJECT_REQUEST})
        const {data} = await api.post("/api/projects/invite",{email,projectId});
        console.log("delete project by id success",data);
        dispatch({type : DELETE_PROJECT_SUCCESS,payload : data})
    } catch (error) {
        console.log(error);
    }
}

export const acceptInvitation = ({invitationToken,navigate})=> async(dispatch)=>{
    try {
        dispatch({type : ACCEPT_INVITATION_REQUEST})
        const {data} = await api.get("/api/projects/invite/accept-invitation",{
            token : invitationToken
        });
        navigate("/project/"+data.projectId)
        console.log("accept invitation success",data);
        dispatch({type : ACCEPT_INVITATION_SUCCESS,payload : data})
    } catch (error) {
        console.log(error);
    }
}
