import api from "@/config/api";
import { ASSIGNED_ISSUE_TO_USER_FAILURE, ASSIGNED_ISSUE_TO_USER_REQUEST, ASSIGNED_ISSUE_TO_USER_SUCCESS, CREATE_ISSUE_FAILURE, CREATE_ISSUE_REQUEST, CREATE_ISSUE_SUCCESS, DELETE_ISSUE_FAILURE, DELETE_ISSUE_REQUEST, DELETE_ISSUE_SUCCESS, FETCH_ISSUES_BY_ID_FAILURE, FETCH_ISSUES_BY_ID_REQUEST, FETCH_ISSUES_BY_ID_SUCCESS, FETCH_ISSUES_FAILURE, FETCH_ISSUES_REQUEST, FETCH_ISSUES_SUCCESS, UPDATE_ISSUE_STATUS_REQUEST, UPDATE_ISSUE_STATUS_SUCCESS } from "./ActionType"

export const createIssue = (issueData) => async(dispatch) => {
    dispatch({type:CREATE_ISSUE_REQUEST});
    try {
        const response = await api.post(`/api/issue/create-issue`,issueData);
        console.log('created issue',response.data);
        dispatch({
            type : CREATE_ISSUE_SUCCESS,
            issues : response.data
        })
    } catch (error) {
        dispatch({
            type : CREATE_ISSUE_FAILURE,
            error : error.message
        })
        console.log(error);
    }
}

export const fetchIssues = (id) => async(dispatch) => {
    dispatch({type:FETCH_ISSUES_REQUEST});
    try {
        const response = await api.get(`/api/issue/project/${id}`);
        console.log('fetched issues',response.data);
        dispatch({
            type : FETCH_ISSUES_SUCCESS,
            issues : response.data
        })
    } catch (error) {
        dispatch({
            type : FETCH_ISSUES_FAILURE,
            error : error.message
        })
        console.log(error);
    }
}

export const fetchIssueById = (id) => async(dispatch) => {
    dispatch({type:FETCH_ISSUES_BY_ID_REQUEST});
    try {
        const response = await api.get(`/api/issue/${id}`);
        console.log('fetched issue by id',response.data);
        dispatch({
            type : FETCH_ISSUES_BY_ID_SUCCESS,
            issues : response.data
        })
    } catch (error) {
        dispatch({
            type : FETCH_ISSUES_BY_ID_FAILURE,
            error : error.message
        })
        console.log(error);
    }
}

export const updateIssueById = (id,status) => async(dispatch) => {
    dispatch({type:UPDATE_ISSUE_STATUS_REQUEST});
    try {
        const response = await api.put(`/api/issue/${id}/status/${status}`);
        console.log('updating issue by id',response.data);
        dispatch({
            type : UPDATE_ISSUE_STATUS_SUCCESS,
            issues : response.data
        })
    } catch (error) {
        dispatch({
            type : UPDATE_ISSUE_STATUS_SUCCESS,
            error : error.message
        })
        console.log(error);
    }
}

export const assignedUserToIssue = (issueId,userId) => async(dispatch) => {
    dispatch({type:ASSIGNED_ISSUE_TO_USER_REQUEST});
    try {
        console.log("------- 00000 ------ ",issueId,userId)
        const response = await api.put(`/api/issue/${issueId}/assignee/${userId}`);
        console.log('updating issue by id',response.data);
        dispatch({
            type : ASSIGNED_ISSUE_TO_USER_SUCCESS,
            issues : response.data
        })
    } catch (error) {
        dispatch({
            type : ASSIGNED_ISSUE_TO_USER_FAILURE,
            error : error.message
        })
        console.log(error);
    }
}

export const deleteIssue = (id) => async(dispatch) => {
    dispatch({type:DELETE_ISSUE_REQUEST});
    try {
        const response = await api.delete(`/api/issue/${id}`);
        console.log('deleted issue by id',response.data);
        dispatch({
            type : DELETE_ISSUE_SUCCESS,
            issueId : id
        })
    } catch (error) {
        dispatch({
            type : DELETE_ISSUE_FAILURE,
            error : error.message
        })
        console.log(error);
    }
}