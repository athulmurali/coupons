const initialState={
    toBeFetched : false,
    filters : [],
    search:{},
    arr: []
}


const MINIMUM_SEARCH_LENGTH = 3
export const FETCH_COUPONS = "FETCH_COUPONS"

const SortFilterReducer =(state= initialState, action)=>{

    switch(action.type)
    {
        case 'SET_FILTERS' : return  {
            ...state,
            filters : action.payload,
            toBeFetched : true
        }

        case 'SET_SEARCH'  : return {
            ...state,
            search : action.payload.name,
            toBeFetched : !!action.payload.name && action.payload.name.length >=MINIMUM_SEARCH_LENGTH
        }

        case FETCH_COUPONS + '_PENDING' : return {
            ...state,
            toBeFetched : false,
            isLoading : false

        }

        case FETCH_COUPONS + '_REJECTED' : return {
            ...state,
            toBeFetched : false,
            isLoading : false

        }

        case FETCH_COUPONS + '_FULFILLED' : {
            return {
                ...state,
                toBeFetched : false,
                isLoading : false,
                arr : action.payload.data.results

            }
        }
        default             : return {...state}
    }
}

export  default  SortFilterReducer