/**
 * @param arr the array to be sorted
 * @param key the name of the field in the object in the array based on which it is to be sorted
 * @param ascOrderVal the value for ascending order  comparison.
 * @param order the order based on which arr is to be sorted.
 * If the order matches ascOrderVal, it is sorted in ascending order
 * else, sorting will be done  in descending order
 */

export default function SortByKey (arr, key, ascOrderVal, order){
	return arr.sort((obj1,obj2)=> {
		const comparator = (order, ascOrderVal) => (order === ascOrderVal ?
			(obj1, obj2) => (obj1.localeCompare(obj2) ) :
			(obj1, obj2) => (obj2.localeCompare(obj1) ));
		return comparator(order, ascOrderVal)(obj1[key].toString().toLowerCase(), obj2[key].toString().toLowerCase());
	})
}
