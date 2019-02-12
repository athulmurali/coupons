export const FETCH_COUPONS = "FETCH_COUPONS"
export const SET_SORT = 'SET_SORT'
export const SET_FILTERS = 'SET_FILTERS'
export const SET_SEARCH = 'SET_SEARCH'

export const FETCH_COUPONS_PENDING = FETCH_COUPONS + '_PENDING'
export const FETCH_COUPONS_REJECTED = FETCH_COUPONS + '_REJECTED'
export const FETCH_COUPONS_FULFILLED = FETCH_COUPONS + '_FULFILLED'


const initialState = {
    toBeFetched: false,
    filters: {},
    search: {},
    arr: []
}

// to be moved to config
const MINIMUM_SEARCH_LENGTH = 3;

const SearchSortFilterReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_SORT :
            return {
                ...state,
                sort: action.payload,
                toBeFetched: true
            }

        case SET_FILTERS :
            return {
                ...state,
                filters: action.payload,
                toBeFetched: true
            }

        case SET_SEARCH  :
            return {
                ...state,
                search: action.payload,
                toBeFetched: !!action.payload.name && action.payload.name.length >= MINIMUM_SEARCH_LENGTH
            }

        case FETCH_COUPONS_PENDING :
            return {
                ...state,
                toBeFetched: false,
                isLoading: false

            }

        case FETCH_COUPONS_REJECTED :
            return {
                ...state,
                toBeFetched: false,
                isLoading: false

            }

        case FETCH_COUPONS_FULFILLED : {
            return {
                ...state,
                toBeFetched: false,
                isLoading: false,
                arr: action.payload.data.results

            }
        }

        default             :
            return {...state}
    }
}

export default SearchSortFilterReducer