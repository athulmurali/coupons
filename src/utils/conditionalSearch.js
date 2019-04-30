/**
 * @author Athul Muralidharan
 * conditionalSearch
 *
 * @param arr the array  of objects in which the search must be performed.
 * @param searchFieldNames, Array<String>,
 * the names of the field in the object  in arr to which searchText is to be compared
 * @param searchText the text to be searched across the array
 * @returns {*}  a new array of objects that contains the searchText  in any of searchFieldNames
 *
 * Note :
 * The comparison is non-case-sensitive.
 * The searchFieldNames is an array of String
 * As soon as a field contains the searchText it returns true.
 * Warning:
 * This function WILL BREAK if unicode characters are passed  in arr or searchText.
 *
 * Tests :
 *  #1
 *  	arr =[{name : "abc"},{name:""},{name: "Ab"}]
 *  	searchFieldNames = ["name"]
 *  	searchText = "ab"
 *  	conditionalSearch(arr, searchFieldNames, searchText) => [{name : "abc"},{name: "Ab"}]
 *  #2
 *  	arr =[{name : "abc"},{name:""},{name: "Ab"}]
 *  	searchFieldNames = ["name"]
 *  	searchText = "Ab"
 *  	conditionalSearch(arr, searchFieldNames, searchText) => [{name : "abc"},{name: "Ab"}]
 *
 *  #3
 *  	arr =[{name : "abc"},{name:""},{name: "Ab"}]
 *  	searchFieldNames = ["name"]
 *  	searchText = ""
 *  	conditionalSearch(arr, searchFieldNames, searchText) => [{name : "abc"},{name: ""},{name: "Ab"}]
 *  #4
 *  	arr =[{name : "abc", },{name:""},{name: "Ab"}]
 *  	searchFieldNames = ["name","description"]
 *  	searchText = ""
 *  	conditionalSearch(arr, searchFieldNames, searchText) => [{name : "abc"},{name: ""},{name: "Ab"}]
 *  #5
 *  	arr =[{name : "abc",description:"" },{name:"",description:"apple"},{name: "Ab",description:""}]
 *  	searchFieldNames = ["name","description"]
 *  	searchText = "apple"
 *  	conditionalSearch(arr, searchFieldNames, searchText) => [{name:"",description:"apple"}]
 *
 * 	#6
 *  	arr =[{name : "abc",description:"" },{name:"",description:"apple"},{name: "Ab",description:""}]
 *  	searchFieldNames = ["name","description"]
 *  	searchText = "xyz"
 *  	conditionalSearch(arr, searchFieldNames, searchText) => []
 *
 *
 */
const conditionalSearch = (arr,searchFieldNames, searchText)=>{
	return arr.filter((obj)=>{
			for(let searchFieldName of searchFieldNames)
			{
				if (obj[searchFieldName].toString().toLowerCase()
					.includes(searchText.toString().toLowerCase())){
					return true
				}
			}
			return false;
		})
};

export default conditionalSearch