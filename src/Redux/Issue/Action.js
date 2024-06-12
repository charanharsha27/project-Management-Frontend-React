import api from "@/config/api";
import { ASSIGNED_ISSUE_TO_USER_FAILURE, ASSIGNED_ISSUE_TO_USER_REQUEST, ASSIGNED_ISSUE_TO_USER_SUCCESS, FETCH_ISSUES_BY_ID_FAILURE, FETCH_ISSUES_BY_ID_REQUEST, FETCH_ISSUES_BY_ID_SUCCESS, FETCH_ISSUES_FAILURE, FETCH_ISSUES_REQUEST, FETCH_ISSUES_SUCCESS, UPDATE_ISSUE_STATUS_REQUEST, UPDATE_ISSUE_STATUS_SUCCESS } from "./ActionType"

export const fetchIssues = (id) => async(dispatch) => {
    dispatch({type:FETCH_ISSUES_REQUEST});
    try {
        const response = await api.get(`/api/issues/project/${id}`);
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
        const response = await api.get(`/api/issues/${id}`);
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

export const updateIssueById = ({id,status}) => async(dispatch) => {
    dispatch({type:UPDATE_ISSUE_STATUS_REQUEST});
    try {
        const response = await api.put(`/api/issues/${id}/status/${status}`);
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

export const assignedUserToIssue = ({issueId,userId}) => async(dispatch) => {
    dispatch({type:ASSIGNED_ISSUE_TO_USER_REQUEST});
    try {
        const response = await api.put(`/api/issues/${issueId}/assignee/${userId}`);
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
