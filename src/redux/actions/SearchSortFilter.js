import {SET_FILTERS, SET_SEARCH, SET_SORT, SET_LOADED, FETCH_CATEGORIES} from "../reducers/SearchSortFilterReducer";
import API from "../../utils/API";
/**
 *
 * @param dispatch
 * @param searchParams : type Object
 * : {searchParamName : value}
 * example :
 * searchParams = 	{name  : 'dow'}
 * searchParams = 	{name  : 'bounty'}
 *
 */
export const updateSearch=(dispatch, searchParams)=>{
	dispatch({
		type : SET_SEARCH,
		payload :  searchParams

	})
}

/**
 *
 * @param dispatch
 * @param filterParams : type Object
 *
 * Note : any key in filter params can have a value of type String or Array (Li)
 * example:
 * filterParams = { categories : ['babyCare','Bedding']}
 * filterParams = { categories : []}
 */

export const updateFilters=(dispatch, filterParams)=>{
	dispatch({
		type : SET_FILTERS,
		payload :  filterParams

	})
}


/**
 *
 * @param dispatch
 * @param sortParams : type Object
 * example :
 * sortParams = { sortBy : 'fieldName', sortOrder : 'asc'}
 * sortParams = { sortBy : 'fieldName', sortOrder : 'desc'}
 *
 * Note : For setting the sort order use the enum defined
 * sortParams can be an empty object but not empty or undefined
 *
 * the fieldName can be : 'name' or some other field name present in the  Object model
 *
 *
 */

export const updateSort=(dispatch, sortParams)=>{

	dispatch({
		type : SET_SORT,
		payload :  sortParams

	})

}


export const updateLoaded=(dispatch, loadedParams)=>{

	dispatch({
		type : SET_LOADED,
		payload :  loadedParams

	})

};


/** fetchCategories
 *
 * @param dispatch
 *
 * The following action, passed the api function and  returns the axios call (promise).
 * A function reference is being passed into the payload
 */
export const fetchCategories=(dispatch)=>{
	dispatch({
		type : FETCH_CATEGORIES,
		payload : API.getCategoriesFromServer
	})

}