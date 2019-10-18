import axios from 'axios'
import {GET_ALL} from './actionTypes'

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    img: '',
    mortgage: null,
    rent: null,
    all: {}

}

export const getAll = () => {
    let data = axios.get('/api/houses')
    .then(res => res.data,        
        )

    return{
        type: GET_ALL,
        payload: data
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action
    switch(type){
        case GET_ALL:
            return{all: payload}
            
        default:
            return state
    }
    
}