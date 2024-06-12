import { GET_USER_SUBSCRIPTION_REQUEST, UPGRADE_SUBSCRIPTION_REQUEST, GET_USER_SUBSCRIPTION_SUCCESS, UPGRADE_SUBSCRIPTION_SUCCESS, UPGRADE_SUBSCRIPTION_FAILURE, GET_USER_SUBSCRIPTION_FAILURE } from "./ActionType.js";

const initialState = {
    userSubscription : null,
    loading : false,
    error : null
}

const SubscriptionReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_USER_SUBSCRIPTION_REQUEST:
        case UPGRADE_SUBSCRIPTION_REQUEST:
            return {
                ...state,
                loading : true,
                error : null
            }
        case GET_USER_SUBSCRIPTION_SUCCESS:
            return {
                ...state,
                userSubscription : action.payload,
                loading : false,
                error : null
            }
        case UPGRADE_SUBSCRIPTION_SUCCESS:
            return {
                ...state,
                userSubscription : action.payload,
                loading : false
            }
        case GET_USER_SUBSCRIPTION_FAILURE:
        case UPGRADE_SUBSCRIPTION_FAILURE:
            return {
                ...state,
                error : action.payload,
                loading : false
            }
        default:
            return state;
    }
}

export default SubscriptionReducer;