import api from "@/config/api"
import { GET_USER_SUBSCRIPTION_FAILURE, GET_USER_SUBSCRIPTION_REQUEST, GET_USER_SUBSCRIPTION_SUCCESS, UPGRADE_SUBSCRIPTION_FAILURE, UPGRADE_SUBSCRIPTION_REQUEST, UPGRADE_SUBSCRIPTION_SUCCESS } from "./ActionType"

export const getUserSubscription = (jwt) => async(dispatch) => {
    dispatch({ type: GET_USER_SUBSCRIPTION_REQUEST })
    try {
        const response = await api.get(`/api/subscription/user`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        console.log("user subscription -> ",response.data);
        dispatch({ type: GET_USER_SUBSCRIPTION_SUCCESS, payload: response.data })
    } catch (error) {
        dispatch({ type: GET_USER_SUBSCRIPTION_FAILURE, payload: error.data})
    }
}

export const upgradeSubscription = (plan,token) => async(dispatch) => {
    dispatch({ type: UPGRADE_SUBSCRIPTION_REQUEST })
    try {
        const response = await api.patch(`/api/subscription/upgrade-subscription` ,null,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            },
            params: {
                planType:plan
            }
        })
        console.log("response ---- ",response);
        dispatch({ type: UPGRADE_SUBSCRIPTION_SUCCESS, payload: response.data })
    } catch (error) {
        dispatch({ type: UPGRADE_SUBSCRIPTION_FAILURE, payload: error.data})
        console.log("eeeeeeeeeeeeeeeeeeeeeee",error);
    }
}