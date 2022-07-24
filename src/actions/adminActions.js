import axios from 'axios'
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
    ADMIN_GET_INSTRUCTOR_REQUEST,
    ADMIN_GET_INSTRUCTOR_SUCCESS,
    ADMIN_GET_INSTRUCTOR_FAIL,
    ADMIN_DELETE_INSTRUCTOR_REQUEST,
    ADMIN_DELETE_INSTRUCTOR_SUCCESS,
    ADMIN_DELETE_INSTRUCTOR_FAIL,
    ADMIN_CREATE_SESSION_REQUEST,
    ADMIN_CREATE_SESSION_SUCCESS,
    ADMIN_CREATE_SESSION_FAIL,
    ADMIN_GET_SESSIONS_REQUEST,
    ADMIN_GET_SESSIONS_SUCCESS,
    ADMIN_GET_SESSIONS_FAIL,
    ADMIN_GET_SESSION_REQUEST,
    ADMIN_GET_SESSION_SUCCESS,
    ADMIN_GET_SESSION_FAIL,
    ADMIN_UPDATE_SESSION_REQUEST,
    ADMIN_UPDATE_SESSION_SUCCESS,
    ADMIN_UPDATE_SESSION_FAIL,
    ADMIN_DELETE_SESSION_REQUEST,
    ADMIN_DELETE_SESSION_SUCCESS,
    ADMIN_DELETE_SESSION_FAIL,
    ADMIN_CREATE_WORKOUT_REQUEST,
    ADMIN_CREATE_WORKOUT_SUCCESS,
    ADMIN_CREATE_WORKOUT_FAIL,
    ADMIN_GET_WORKOUTS_REQUEST,
    ADMIN_GET_WORKOUTS_SUCCESS,
    ADMIN_GET_WORKOUTS_FAIL,
    ADMIN_GET_WORKOUT_REQUEST,
    ADMIN_GET_WORKOUT_SUCCESS,
    ADMIN_GET_WORKOUT_FAIL,
    ADMIN_UPDATE_WORKOUT_REQUEST,
    ADMIN_UPDATE_WORKOUT_SUCCESS,
    ADMIN_UPDATE_WORKOUT_FAIL,
    ADMIN_DELETE_WORKOUT_REQUEST,
    ADMIN_DELETE_WORKOUT_SUCCESS,
    ADMIN_DELETE_WORKOUT_FAIL
} from '../constants/adminConstants'

export const login = (email, password) => async (dispatch) => {
  try {
        dispatch({
            type: ADMIN_LOGIN_REQUEST,
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const { data } = await axios.post(
            'http://localhost:5000/api/12007/admin',
            { email, password },
            config
        )

        dispatch({
            type: ADMIN_LOGIN_SUCCESS,
            payload: data,
        })

        localStorage.setItem('adminInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: ADMIN_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('adminInfo')
    dispatch({ type: ADMIN_LOGOUT })
    dispatch({ type: ADMIN_DETAILS_RESET })
    dispatch({ type: ADMIN_LIST_RESET })
    document.location.href = '/sign-in'
}

export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({
        type: ADMIN_REGISTER_REQUEST,
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const { data } = await axios.post(
            'http://localhost:5000/api/12007/admin',
            { name, email, password },
            config
        )

        dispatch({
            type: ADMIN_REGISTER_SUCCESS,
            payload: data,
        })

        dispatch({
            type: ADMIN_LOGIN_SUCCESS,
            payload: data,
        })

        localStorage.setItem('adminInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: ADMIN_REGISTER_FAIL,
            payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const getAdminDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADMIN_DETAILS_REQUEST,
        })

        const {
            adminLogin: { adminInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${adminInfo.token}`,
            },
        }

        const { data } = await axios.get(`http://localhost:5000/api/12007/admin/${id}`, config)

        dispatch({
            type: ADMIN_DETAILS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
        error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: ADMIN_DETAILS_FAIL,
            payload: message,
        })
    }
}

export const updateAdminProfile = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADMIN_UPDATE_PROFILE_REQUEST,
        })
    
        const {
            adminLogin: { adminInfo },
        } = getState()
    
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${adminInfo.token}`,
            },
        }
    
        const { data } = await axios.put(`http://localhosst:5000/api/12007/admin/${id}`, config)
  
        dispatch({
            type: ADMIN_UPDATE_PROFILE_SUCCESS,
            payload: data,
        })
        dispatch({
            type: ADMIN_LOGIN_SUCCESS,
            payload: data,
        })
        localStorage.setItem('adminInfo', JSON.stringify(data))
    }catch (error) {
        const message =
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: ADMIN_UPDATE_PROFILE_FAIL,
            payload: message,
        })
    }
}
  
export const listAdmins = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADMIN_LIST_REQUEST,
        })
    
        const {
            adminLogin: { adminInfo },
        } = getState()
    
        const config = {
            headers: {
                Authorization: `Bearer ${adminInfo.token}`,
            },
        }
    
        const { data } = await axios.get(`http://localhost:5000/api/12007/all-admins`, config)
  
        dispatch({
            type: ADMIN_LIST_SUCCESS,
            payload: data,
        })
    }catch (error) {
        console.log(error)
        const message =
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: ADMIN_LIST_FAIL,
            payload: message,
        })
    }
}

export const createInstructor = (name, email, password, mobile) => async (dispatch) => {
    try {
        dispatch({
        type: ADMIN_CREATE_INSTRUCTOR_REQUEST,
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const { data } = await axios.post(
            'http://localhost:5000/api/12007/admin/instructor',
            { name, email, password, mobile },
            config
        )

        dispatch({
            type: ADMIN_CREATE_INSTRUCTOR_SUCCESS,
            payload: data,
        })


        localStorage.setItem('adminInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: ADMIN_CREATE_INSTRUCTOR_FAIL,
            payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const listInstructors = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADMIN_GET_INSTRUCTORS_REQUEST,
        })
    
        const {
            adminLogin: { adminInfo },
        } = getState()
    
        const config = {
            headers: {
                Authorization: `Bearer ${adminInfo.token}`,
            },
        }
    
        const { data } = await axios.get(`http://localhost:5000/api/12007/admin/all-instructors`, config)
  
        dispatch({
            type: ADMIN_GET_INSTRUCTORS_SUCCESS,
            payload: data,
        })
    }catch (error) {
        console.log(error)
        const message =
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: ADMIN_GET_INSTRUCTORS_FAIL,
            payload: message,
        })
    }
}

export const getInstructor = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADMIN_GET_INSTRUCTOR_REQUEST,
        })

        const {
            adminLogin: { adminInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${adminInfo.token}`,
            },
        }

        const { data } = await axios.get(`http://localhost:5000/api/12007/admin/instructor/${id}`, config)

        dispatch({
            type: ADMIN_GET_INSTRUCTOR_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
        error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: ADMIN_GET_INSTRUCTOR_FAIL,
            payload: message,
        })
    }
}

export const deleteInstructor = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADMIN_DELETE_INSTRUCTOR_REQUEST,
        })
    
        const {
            adminLogin: { adminInfo },
        } = getState()
    
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${adminInfo.token}`,
            },
        }
    
        const { data } = await axios.delete(`http://localhosst:5000/api/12007/admin/instructor/${id}`, config)
  
        dispatch({
            type: ADMIN_DELETE_INSTRUCTOR_SUCCESS,
            payload: data,
        })
        localStorage.setItem('adminInfo', JSON.stringify(data))
    }catch (error) {
        const message =
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: ADMIN_DELETE_INSTRUCTOR_FAIL,
            payload: message,
        })
    }
}


export const createSession = (date, time, instructor, workout, status) => async (dispatch) => {
    try {
        dispatch({
        type: ADMIN_CREATE_SESSION_REQUEST,
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const { data } = await axios.post(
            'http://localhost:5000/api/12007/admin/session',
            { date, time, instructor, workout, status },
            config
        )

        dispatch({
            type: ADMIN_CREATE_SESSION_SUCCESS,
            payload: data,
        })


        localStorage.setItem('adminInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: ADMIN_CREATE_SESSION_FAIL,
            payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const listSessions = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADMIN_GET_SESSIONS_REQUEST,
        })
    
        const {
            adminLogin: { adminInfo },
        } = getState()
    
        const config = {
            headers: {
                Authorization: `Bearer ${adminInfo.token}`,
            },
        }
    
        const { data } = await axios.get(`http://localhost:5000/api/12007/admin/all-sessions`, config)
  
        dispatch({
            type: ADMIN_GET_SESSIONS_SUCCESS,
            payload: data,
        })
    }catch (error) {
        console.log(error)
        const message =
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: ADMIN_GET_SESSIONS_FAIL,
            payload: message,
        })
    }
}

export const getSession = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADMIN_GET_SESSION_REQUEST,
        })

        const {
            adminLogin: { adminInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${adminInfo.token}`,
            },
        }

        const { data } = await axios.get(`http://localhost:5000/api/12007/admin/session/${id}`, config)

        dispatch({
            type: ADMIN_GET_SESSION_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
        error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: ADMIN_GET_SESSION_FAIL,
            payload: message,
        })
    }
}

export const updateSession = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADMIN_UPDATE_SESSION_REQUEST,
        })
    
        const {
            adminLogin: { adminInfo },
        } = getState()
    
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${adminInfo.token}`,
            },
        }
    
        const { data } = await axios.put(`http://localhosst:5000/api/12007/admin/session/${id}`, config)
  
        dispatch({
            type: ADMIN_UPDATE_SESSION_SUCCESS,
            payload: data,
        })
        localStorage.setItem('adminInfo', JSON.stringify(data))
    }catch (error) {
        const message =
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: ADMIN_UPDATE_SESSION_FAIL,
            payload: message,
        })
    }
}

export const deleteSession = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADMIN_DELETE_SESSION_REQUEST,
        })
    
        const {
            adminLogin: { adminInfo },
        } = getState()
    
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${adminInfo.token}`,
            },
        }
    
        const { data } = await axios.delete(`http://localhosst:5000/api/12007/admin/session/${id}`, config)
  
        dispatch({
            type: ADMIN_DELETE_SESSION_SUCCESS,
            payload: data,
        })
        localStorage.setItem('adminInfo', JSON.stringify(data))
    }catch (error) {
        const message =
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: ADMIN_DELETE_SESSION_FAIL,
            payload: message,
        })
    }
}


export const createWorkout = (name) => async (dispatch) => {
    try {
        dispatch({
        type: ADMIN_CREATE_WORKOUT_REQUEST,
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const { data } = await axios.post(
            'http://localhost:5000/api/12007/admin/session',
            { name },
            config
        )

        dispatch({
            type: ADMIN_CREATE_WORKOUT_SUCCESS,
            payload: data,
        })


        localStorage.setItem('adminInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: ADMIN_CREATE_WORKOUT_FAIL,
            payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const listWorkouts = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADMIN_GET_WORKOUTS_REQUEST,
        })
    
        const {
            adminLogin: { adminInfo },
        } = getState()
    
        const config = {
            headers: {
                Authorization: `Bearer ${adminInfo.token}`,
            },
        }
    
        const { data } = await axios.get(`http://localhost:5000/api/12007/admin/all-workouts`, config)
  
        dispatch({
            type: ADMIN_GET_WORKOUTS_SUCCESS,
            payload: data,
        })
    }catch (error) {
        console.log(error)
        const message =
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: ADMIN_GET_WORKOUTS_FAIL,
            payload: message,
        })
    }
}

export const getWorkout = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADMIN_GET_WORKOUT_REQUEST,
        })

        const {
            adminLogin: { adminInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${adminInfo.token}`,
            },
        }

        const { data } = await axios.get(`http://localhost:5000/api/12007/admin/workout/${id}`, config)

        dispatch({
            type: ADMIN_GET_WORKOUT_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
        error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: ADMIN_GET_WORKOUT_FAIL,
            payload: message,
        })
    }
}

export const updateWorkout = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADMIN_UPDATE_WORKOUT_REQUEST,
        })
    
        const {
            adminLogin: { adminInfo },
        } = getState()
    
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${adminInfo.token}`,
            },
        }
    
        const { data } = await axios.put(`http://localhosst:5000/api/12007/admin/workout/${id}`, config)
  
        dispatch({
            type: ADMIN_UPDATE_WORKOUT_SUCCESS,
            payload: data,
        })
        localStorage.setItem('adminInfo', JSON.stringify(data))
    }catch (error) {
        const message =
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: ADMIN_UPDATE_WORKOUT_FAIL,
            payload: message,
        })
    }
}

export const deleteWorkout = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADMIN_DELETE_WORKOUT_REQUEST,
        })
    
        const {
            adminLogin: { adminInfo },
        } = getState()
    
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${adminInfo.token}`,
            },
        }
    
        const { data } = await axios.delete(`http://localhosst:5000/api/12007/admin/workout/${id}`, config)
  
        dispatch({
            type: ADMIN_DELETE_WORKOUT_SUCCESS,
            payload: data,
        })
        localStorage.setItem('adminInfo', JSON.stringify(data))
    }catch (error) {
        const message =
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: ADMIN_DELETE_WORKOUT_FAIL,
            payload: message,
        })
    }
}