/**
 * @author Athul Muralidharan
 * conditionalSearch
 *
 * @param arr the array  of objects in which the search must be performed.
 * @param searchFieldName the name of the field in the object  in arr to which searchText is to be compared
 * @param searchText the text to be searched across the array
 * @returns {*}  a new array of objects that contains the searchText  in searchFieldName
 *
 * Note :
 * The comparison is non-case-sensitive.
 *
 * Warning:
 * This function WILL BREAK if unicode characters are passed  in arr or searchText.
 *
 * Tests :
 *  #1
 *  	arr =[{name : "abc"},{name:""},{name: "Ab"}]
 *  	searchFieldName = "name"
 *  	searchText = "ab"
 *  	conditionalSearch(arr, searchFieldName, searchText) => [{name : "abc"},{name: "Ab"}]
 *  #2
 *  	arr =[{name : "abc"},{name:""},{name: "Ab"}]
 *  	searchFieldName = "name"
 *  	searchText = "Ab"
 *  	conditionalSearch(arr, searchFieldName, searchText) => [{name : "abc"},{name: "Ab"}]
 *
 *  #3
 *  	arr =[{name : "abc"},{name:""},{name: "Ab"}]
 *  	searchFieldName = "name"
 *  	searchText = ""
 *  	conditionalSearch(arr, searchFieldName, searchText) => [{name : "abc"},{name: ""},{name: "Ab"}]
 *
 *
 */
const conditionalSearch = (arr,searchFieldName, searchText)=>{
	return arr.filter(obj=>(obj[searchFieldName].toLowerCase().includes(searchText.toLowerCase()) )) ;
};

export default conditionalSearch