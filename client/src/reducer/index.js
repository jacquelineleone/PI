import { GET_COUNTRIES, GET_BY_NAME, GET_BY_ID, POST_ACTIVITY, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, ORDER_BY_NAME, ORDER_BY_POPULATION } from "../actions/types";

const initialState = {
    countries: [],
    allCountries: [],
    activities: [],
    detail: [],
}

export default function rootReducer(state = initialState, action){
    switch(action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }

        case GET_BY_NAME:
            return {
                ...state,
                countries: action.payload
            }

        case GET_BY_ID:
            return {
                ...state,
                detail: action.payload
            }
        
        case POST_ACTIVITY:
            return {
                ...state
            }

        case FILTER_BY_CONTINENT:
            const allCountries = state.allCountries;
            const continentFiltered = action.payload === 'Filter by Continent' ? allCountries : allCountries.filter(c => c.continent === action.payload)
            return {
                ...state,
                countries: continentFiltered
            }

        case FILTER_BY_ACTIVITY:
            const allCountries2 = state.allCountries
            const activityFiltered = action.payload === 'Filter by Activity' ? allCountries2 : allCountries2.filter(c => c.activities.filter(a => a.name === action.payload))
            return {
                ...state,
                countries: activityFiltered
            }

        case ORDER_BY_NAME:
            let orderName = action.payload === 'A to Z' ?
            state.countries.sort(function(a, b) {
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                return 0
            }) :
            state.countries.sort(function(a, b){
                if (a.name > b.name) return -1;
                if (a.name < b.name) return 1;
                return 0
            })
            return {
                ...state,
                countries: orderName
            }

        case ORDER_BY_POPULATION:
            let orderPopulation = action.payload === 'Lowest to highest' ?
            state.allCountries.sort(function(a, b) {
                if(a.population > b.population) return 1;
                if(a.population < b.population) return -1;
                return 0;
            }) :
            state.allCountries.sort(function(a, b) {
                if(a.population > b.population) return -1;
                if(a.population < b.population) return 1;
                return 0;            
            })
            return {
                ...state,
                countries: orderPopulation
            }

        /*case GET_DETAIL:
            return {
                ...state,
                detail: action.payload
            }*/

       /* case CREATE_ACTIVITY:
            return {
                ...state,
                activities: [...state.activities, action.payload]
            }*/

        default: 
            return state;
    }
}