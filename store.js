import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const initial = {
    message: 'START!',
    data: [{about: 'sample About', description: 'sample Description'}],
    number: [],
    result: 0
}

function calcReducer(state = initial, action) {
    switch (action.type) {
        case 'ADD':
            return addReduce(state, action);
        case 'RESET':
            return resetReduce(state, action);
        default:
            return state;
    }
}

function addReduce(state, action){
    let data = {
        about: action.about,
        description: action.description,
    }
    let data2 = state.data.slice();
    data2.unshift(data);
    let num = data.about.replace(/[^0-9]/g,"");
    if (num === null){
        num = 0
    }
    let number2 = state.number.slice();
    number2.unshift(num);
    let result = (state.result * 1) + (num * 1);
    return {
        message: 'Added!',
        data: data2,
        number: number2,
        result: result
    };
}

function resetReduce(state, action){
    return {
        message: 'Restart!',
        data: [{about: 'sample About', description: 'sample Description'}],
        number: [],
        result: 0
    };
}

export function addMemo(text1, text2){
    return {
        type: 'ADD',
        about: text1,
        description: text2
    }
}

export function initStore(state=initial) {
    return createStore(calcReducer,state,applyMiddleware(thunkMiddleware))
}