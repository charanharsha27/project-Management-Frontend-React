import { 
    FETCH_ISSUES_REQUEST, CREATE_ISSUE_REQUEST, DELETE_ISSUE_REQUEST, 
    FETCH_ISSUES_BY_ID_REQUEST, ASSIGNED_ISSUE_TO_USER_REQUEST, 
    FETCH_ISSUES_SUCCESS, FETCH_ISSUES_BY_ID_SUCCESS, UPDATE_ISSUE_STATUS_SUCCESS, 
    CREATE_ISSUE_SUCCESS, ASSIGNED_ISSUE_TO_USER_SUCCESS, DELETE_ISSUE_SUCCESS, 
    FETCH_ISSUES_FAILURE, CREATE_ISSUE_FAILURE, UPDATE_ISSUE_STATUS_FAILURE, 
    DELETE_ISSUE_FAILURE, ASSIGNED_ISSUE_TO_USER_FAILURE 
} from "./ActionType.js";

const initialState = {
    issues: [],
    loading: false,
    error: null,
    issueDetails: null,
    status : ""
};

const issueReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ISSUES_REQUEST:
        case CREATE_ISSUE_REQUEST:
        case DELETE_ISSUE_REQUEST:
        case FETCH_ISSUES_BY_ID_REQUEST:
        case ASSIGNED_ISSUE_TO_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_ISSUES_SUCCESS:
            return {
                ...state,
                loading: false,
                issues: action.issues
            };
        case FETCH_ISSUES_BY_ID_SUCCESS:
        case UPDATE_ISSUE_STATUS_SUCCESS:
            return {
                ...state,
                loading: false,
                issueDetails: action.issues,
                issues: state.issues
            };
        case CREATE_ISSUE_SUCCESS:
            return {
                ...state,
                loading: false,
                issues: [...state.issues, action.issues]
            };
        case ASSIGNED_ISSUE_TO_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                issues: state.issues.map(issue =>
                    issue.id === action.issues.id ? action.issues : issue
                )
            };
        case DELETE_ISSUE_SUCCESS:
            return {
                ...state,
                loading: false,
                issues: state.issues.filter(issue => issue.id !== action.issueId)
            };
        case FETCH_ISSUES_FAILURE:
        case CREATE_ISSUE_FAILURE:
        case UPDATE_ISSUE_STATUS_FAILURE:
        case DELETE_ISSUE_FAILURE:
        case ASSIGNED_ISSUE_TO_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
};

export default issueReducer;
