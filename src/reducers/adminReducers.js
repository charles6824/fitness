import {
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAIL,
    ADMIN_LOGOUT,
    ADMIN_REGISTER_REQUEST,
    ADMIN_REGISTER_SUCCESS,
    ADMIN_REGISTER_FAIL,
    ADMIN_DETAILS_REQUEST,
    ADMIN_DETAILS_SUCCESS,
    ADMIN_DETAILS_FAIL,
    ADMIN_DETAILS_RESET,
    ADMIN_UPDATE_PROFILE_REQUEST,
    ADMIN_UPDATE_PROFILE_SUCCESS,
    ADMIN_UPDATE_PROFILE_FAIL,
    ADMIN_UPDATE_PROFILE_RESET,
    ADMIN_LIST_REQUEST,
    ADMIN_LIST_SUCCESS,
    ADMIN_LIST_FAIL,
    ADMIN_LIST_RESET,
    ADMIN_CREATE_INSTRUCTOR_REQUEST,
    ADMIN_CREATE_INSTRUCTOR_SUCCESS,
    ADMIN_CREATE_INSTRUCTOR_FAIL,
    ADMIN_GET_INSTRUCTORS_REQUEST,
    ADMIN_GET_INSTRUCTORS_SUCCESS,
    ADMIN_GET_INSTRUCTORS_FAIL,
    ADMIN_GET_INSTRUCTORS_RESET,
    ADMIN_GET_INSTRUCTOR_REQUEST,
    ADMIN_GET_INSTRUCTOR_SUCCESS,
    ADMIN_GET_INSTRUCTOR_FAIL,
    ADMIN_GET_INSTRUCTOR_RESET,
    // ADMIN_DELETE_INSTRUCTOR_REQUEST,
    // ADMIN_DELETE_INSTRUCTOR_SUCCESS,
    // ADMIN_DELETE_INSTRUCTOR_FAIL,
    // ADMIN_CREATE_SESSION_REQUEST,
    // ADMIN_CREATE_SESSION_SUCCESS,
    // ADMIN_CREATE_SESSION_FAIL,
    // ADMIN_GET_SESSIONS_REQUEST,
    // ADMIN_GET_SESSIONS_SUCCESS,
    // ADMIN_GET_SESSIONS_FAIL,
    // ADMIN_GET_SESSION_REQUEST,
    // ADMIN_GET_SESSION_SUCCESS,
    // ADMIN_GET_SESSION_FAIL,
    // ADMIN_UPDATE_SESSION_REQUEST,
    // ADMIN_UPDATE_SESSION_SUCCESS,
    // ADMIN_UPDATE_SESSION_FAIL,
    // ADMIN_DELETE_SESSION_REQUEST,
    // ADMIN_DELETE_SESSION_SUCCESS,
    // ADMIN_DELETE_SESSION_FAIL,
    // ADMIN_CREATE_WORKOUT_REQUEST,
    // ADMIN_CREATE_WORKOUT_SUCCESS,
    // ADMIN_CREATE_WORKOUT_FAIL,
    // ADMIN_GET_WORKOUTS_REQUEST,
    // ADMIN_GET_WORKOUTS_SUCCESS,
    // ADMIN_GET_WORKOUTS_FAIL,
    // ADMIN_GET_WORKOUT_REQUEST,
    // ADMIN_GET_WORKOUT_SUCCESS,
    // ADMIN_GET_WORKOUT_FAIL,
    // ADMIN_UPDATE_WORKOUT_REQUEST,
    // ADMIN_UPDATE_WORKOUT_SUCCESS,
    // ADMIN_UPDATE_WORKOUT_FAIL,
    // ADMIN_DELETE_WORKOUT_REQUEST,
    // ADMIN_DELETE_WORKOUT_SUCCESS,
    // ADMIN_DELETE_WORKOUT_FAIL
} from '../constants/adminConstants'
  
export const adminLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case ADMIN_LOGIN_REQUEST:
            return { loading: true }
        case ADMIN_LOGIN_SUCCESS:
            return { loading: false, adminInfo: action.payload }
        case ADMIN_LOGIN_FAIL:
            return { loading: false, error: action.payload }
        case ADMIN_LOGOUT:
            return {}
        default:
            return state
    }
}
  
export const adminRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case ADMIN_REGISTER_REQUEST:
            return { loading: true }
        case ADMIN_REGISTER_SUCCESS:
            return { loading: false, adminInfo: action.payload }
        case ADMIN_REGISTER_FAIL:
            return { loading: false, error: action.payload }
        case ADMIN_LOGOUT:
            return {}
        default:
            return state
    }
}
  
export const adminDetailsReducer = (state = { admin: {} }, action) => {
    switch (action.type) {
        case ADMIN_DETAILS_REQUEST:
            return { ...state, loading: true }
        case ADMIN_DETAILS_SUCCESS:
            return { loading: false, admin: action.payload }
        case ADMIN_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        case ADMIN_DETAILS_RESET:
            return { admin: {} }
        default:
            return state
    }
}

export const adminUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case ADMIN_UPDATE_PROFILE_REQUEST:
            return { loading: true }
        case ADMIN_UPDATE_PROFILE_SUCCESS:
            return { loading: false, success: true, adminInfo: action.payload }
        case ADMIN_UPDATE_PROFILE_FAIL:
            return { loading: false, error: action.payload }
        case ADMIN_UPDATE_PROFILE_RESET:
            return {}
        default:
            return state
    }
}
  
export const adminListReducer = (state = { admins: [] }, action) => {
    switch (action.type) {
        case ADMIN_LIST_REQUEST:
            return { loading: true }
        case ADMIN_LIST_SUCCESS:
            return {
                loading: false,
                admins: action.payload.admins,
                pages: action.payload.pages,
                page: action.payload.page,
            }
        case ADMIN_LIST_FAIL:
            return { loading: false, error: action.payload }
        case ADMIN_LIST_RESET:
            return { admins: [] }
        default:
            return state
    }
}

export const adminCreateInstructorReducer = (state = {}, action) => {
    switch (action.type) {
        case ADMIN_CREATE_INSTRUCTOR_REQUEST:
            return { loading: true }
        case ADMIN_CREATE_INSTRUCTOR_SUCCESS:
            return { loading: false, adminInfo: action.payload }
        case ADMIN_CREATE_INSTRUCTOR_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const adminListInstructorsReducer = (state = { instructors: [] }, action) => {
    switch (action.type) {
        case ADMIN_GET_INSTRUCTORS_REQUEST:
            return { loading: true }
        case ADMIN_GET_INSTRUCTORS_SUCCESS:
            return {
                loading: false,
                instructors: action.payload.admins,
                pages: action.payload.pages,
                page: action.payload.page,
            }
        case ADMIN_GET_INSTRUCTORS_FAIL:
            return { loading: false, error: action.payload }
        case ADMIN_GET_INSTRUCTORS_RESET:
            return { instructors: [] }
        default:
            return state
    }
}

export const adminGetInstructorReducer = (state = { instructor: {} }, action) => {
    switch (action.type) {
        case ADMIN_GET_INSTRUCTOR_REQUEST:
            return { ...state, loading: true }
        case ADMIN_GET_INSTRUCTOR_SUCCESS:
            return { loading: false, instructor: action.payload }
        case ADMIN_GET_INSTRUCTOR_FAIL:
            return { loading: false, error: action.payload }
        case ADMIN_GET_INSTRUCTOR_RESET:
            return { instructor: {} }
        default:
            return state
    }
}