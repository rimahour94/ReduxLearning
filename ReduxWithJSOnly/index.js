// const { info } = require("loglevel")
const redux = require("redux")
const reduxLogger = require("redux-logger")
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUT_ICECREAM"

function buyCake() {
    return {
        type: BUY_CAKE,
        info: "Cake Purchased"
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: "Ice Cream Purchased"
    }
}

//reducer(prevState,action)

const initialStateCake = {
    numOfCakes: 10,

}

const initialStateIceCream = {
    numOfIcecream: 20
}

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE:
//             return {
//                 ...state,
//                 numOfCakes: state.numOfCakes - 1
//             }

//         case BUY_ICECREAM:
//             return {
//                 ...state,
//                 numOfIcecream: state.numOfIcecream - 1
//             }
//         default:
//             return state

//     }
// }


const reducerCake = (state = initialStateCake, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }

        default:
            return state

    }
}

const reducerIceCream = (state = initialStateIceCream, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIcecream: state.numOfIcecream - 1
            }
        default:
            return state

    }
}

const reducerRoot = combineReducers({
    cake: reducerCake,
    iceCream: reducerIceCream
})
const store = createStore(reducerRoot, applyMiddleware(logger))

console.log("initial State", store.getState())

const unsubscribe = store.subscribe(() => console.log("Updated State", store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()