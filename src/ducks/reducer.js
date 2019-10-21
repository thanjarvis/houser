import axios from 'axios'
import {GET_ALL, SEND_PART1, SEND_PART2, SEND_PART3, SET_TO_DASHBOARD} from './actionTypes'

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    img: '',
    mortgage: null,
    rent: null,
    toDashboard: false,
    dbPromise: null,
    all: []

}

export const getAll = () => {
    let data = axios.get('/api/houses')
    .then(res => res.data)

    return{
        type: GET_ALL,
        payload: data
    }
}


export const sendPart1 = (name, address, city, state, zipcode) => {
    
    return{
        type: SEND_PART1,
        name,
        address,
        city,
        state,
        zipcode
    }
}

export const sendPart2 = (img) => {
    return{
        type: SEND_PART2,
        img
    }
}

export const sendPart3 = (mortgage, rent) => {
    return{
        type: SEND_PART3,
        mortgage,
        rent
    }
}

export const setToDashboard = (setToDashboard) => {
    return{
        type: SET_TO_DASHBOARD,
        setToDashboard
    }
}

const sendToDb = (dbstate) => {

    const name = dbstate.name
    const address = dbstate.address
    const city = dbstate.city
    const state = dbstate.state
    const zipcode = dbstate.zipcode
    const img = dbstate.img
    const mortgage = dbstate.mortgage
    const rent = dbstate.rent


    return axios.post('/api/addNew', {name, address, city, state, zipcode, img, mortgage, rent})

    
}

export default function reducer(state = initialState, action){
    const {type} = action
    switch(type){
        case GET_ALL + '_FULFILLED':
            return{
                ...state,
                all: action.payload
            }
        case SEND_PART1:
            return{
                ...state,
                name: action.name,
                address: action.address,
                city: action.city,
                state: action.state,
                zip: action.zipcode
            }
        case SEND_PART2:
            return{
                ...state,
                img:action.img
            }
        case SEND_PART3:
            const newState = {
                ...state,
                mortgage: action.mortgage,
                rent: action.rent
            }
            const dbPromise = sendToDb(newState)
            return {...newState, dbPromise}
        case SET_TO_DASHBOARD:
            return{...state, toDashboard: action.setToDashboard}
        default:
            return state
    }
    
}