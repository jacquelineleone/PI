import axios from 'axios';
import { GET_COUNTRIES, GET_BY_NAME, GET_BY_ID, POST_ACTIVITY, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, ORDER_BY_NAME, ORDER_BY_POPULATION } from './types';


export function getAll(){
    return async (dispatch) => {
        let response = await axios.get('http://localhost:3001/countries');
        let info = response.data;
        return dispatch({
            type: GET_COUNTRIES,
            payload: info
        })
    }
}

export function getByName(name){
    return async (dispatch) => {
        try {
            let response = await axios.get('http://localhost:3001/countries?name=' + name);
            let info = response.data;
            return dispatch({
                type: GET_BY_NAME,
                payload: info
            })
        } catch(error) {
            console.log(error)
        }
    }
}

export function getById(id){
    return async (dispatch) => {
        try {
            let response = await axios.get('http://localhost:3001/countries/' + id);
            let info = response.data;
            return dispatch({
                type: GET_BY_ID,
                payload: info
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function postActivity(payload) {
    return async(dispatch) => {
        let response = await axios.post('http://localhost:3001/activities', payload);
        let info = response.data;
        return {
            type: POST_ACTIVITY
        }
    }
}

export function filterCountriesByContinent(payload){
    return {
        type: FILTER_BY_CONTINENT,
        payload
    }
}

export function filterCountriesByActivity(payload){
    return {
        type: FILTER_BY_ACTIVITY,
        payload
    }
}

export function orderByName(payload){
    return{
        type: ORDER_BY_NAME,
        payload
    }
}

export function orderByPopulation(payload){
    return{
        type: ORDER_BY_POPULATION,
        payload
    }
}

/*export function getDetail(id){
    return async (dispatch) => {
        let response = await axios.get(`http://localhost:3001/countries/${id}`);
        let info = response.data
        return dispatch({
            type: GET_DETAIL,
            payload: info
        }) 
    }
}*/

