const redux = require('redux')
const thunkMiddleware = require("redux-thunk").default
const axios = require('axios')
const applyMiddleware = redux.applyMiddleware
const createStore = redux.createStore


const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USER_DETAILS_REQUEST = "FETCH_USER_DETAILS_REQUEST"
const FETCH_USER_DETAILS_SUCCESS = "FETCH_USER_DETAILS_SUCCESS"
const FETCH_USER_DETAILS_FAILURE = "FETCH_USER_DETAILS_FAILURE"

const fetchUserRequest = () => {
    return {
        type: FETCH_USER_DETAILS_REQUEST
    }
}

const fetchUserSuccess = users => {
    return {
        type: FETCH_USER_DETAILS_SUCCESS,
        payload: users
    }
}

const fetchUserFailure = error => {
    return {
        type: FETCH_USER_DETAILS_FAILURE,
        payload: error
    }
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            }
            break;
        case FETCH_USER_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
            break;
        case FETCH_USER_DETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }
            break;

        default:
            return state
    }
}


const fetchUserData = () => {
    return function fetchData(dispatch) {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplceholder.typicode.com/users')
            .then((res) => {
                const users = res.data.map((user) => user.name)
                dispatch(fetchUserSuccess(users))
            })
            .catch((error) => {
                dispatch(fetchUserFailure(error.message))
            })
    }
}

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

store.subscribe(() => { console.log(store.getState()) })
store.dispatch(fetchUserData())