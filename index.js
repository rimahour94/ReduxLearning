const redux = require('redux');
const reduxLogger = require('redux-logger');

const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAMS = 'BUY_ICECREAMS'

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}


function buyIceCreams() {
    return {
        type: BUY_ICECREAMS,
        info: "Sell Ice Creams"
    }
}

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }


const initialStateCake = {
    numOfCakes: 10
}

const initialStateIceCreams = {
    numOfIceCreams: 20
}

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE:
//             return {
//                 ...state,
//                 numOfCakes: state.numOfCakes - 1
//             }
//             break;

//         case BUY_ICECREAMS:
//             return {
//                 ...state,
//                 numOfIceCreams: state.numOfIceCreams - 1
//             }
//             break;

//         default:
//             return state
//     }
// }

const cakeReducers = (state = initialStateCake, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                numOfCakes: state.numOfCakes - 1
            }
            break;

        default:
            return state
    }
}


const iceCreamsReducers = (state = initialStateIceCreams, action) => {
    switch (action.type) {
        case BUY_ICECREAMS:
            return {
                numOfIceCreams: state.numOfIceCreams - 1
            }
            break;

        default:
            return state
    }
}

const rootreducers = combineReducers({
    cake: cakeReducers,
    icecream: iceCreamsReducers
})

const store = createStore(rootreducers, applyMiddleware(logger))

console.log('initial State', store.getState())

const unsubscribe = store.subscribe(() => { })
store.dispatch({ type: BUY_CAKE, info: "First redux action" })
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCreams())
store.dispatch(buyIceCreams())
store.dispatch(buyIceCreams())

unsubscribe
