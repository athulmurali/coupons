import Config from "../config/config";

/**
 * This method was built with the intent to make a for loop read a little easier. It acts almost
 * like JS's array.prototype.forEach() but it breaks out if a truthy value is returned. This seems
 * to run way faster than an array.prototype.forEach() especially since we can break out of it mid
 * loop.
 *
 * Your call to forEach should loop something like this:
 * _forEach(things, (thing) => {
 *   // Insert functionality here
 * });
 *
 * Note that if you don't want it to break then just don't return anything and it acts just like a
 * forEach
 * @param array - the array to loop through
 * @param callback
 * @return {*} - whatever was returned in the callback function if it is truthy
 * @private
 */
export const _forEach = (array, callback) => {
	let done = null;
	for (let len = array.length - 1; len >= 0; len -= 1) {
		done = callback(array[len], len);
		if (done) return done;
	}
	return null;
};

/**
 * This method capitalizes every first letter of ever word in the string passed in
 * @param string
 * @return string
 */
export const capitalizeFirstLetters = string => string.replace(/(?:^|\s)\S/g, a => a.toUpperCase());

export const truncString = (stringToTrunc, max = 22) => {
	const add = "...";
	return stringToTrunc.length > max ? stringToTrunc.substring(0, max) + add : stringToTrunc;
};

/**
 * Searches through each item name and tries to find words in the item name that match words in the
 * blacklist. If a word matches a word in the blacklist then we replace it with and empty string.
 * Finally we trim the string and return it.
 * @param itemName - The name of the item we want to parse
 * @return {String|string|*}
 */
export const parseName = (itemName) => {
	let newItemName = itemName;

	_forEach(Config.blacklist, (blackWord) => {
		const blackWordRegex = new RegExp(blackWord, "gi");
		newItemName = newItemName.replace(blackWordRegex, "");
	});

	return newItemName.trim();
};

/**
 * Goes through all of the departments and aisles if they exist and looks for a match. Once a match
 * is found then it returns the correct alias to use
 * @param type - either 'department' or 'aisle'
 * @param data - the search data in an array. Must be an object with a property of department or
 *               aisle
 * @return {*}
 */
const checkCategories = (type, data) => {
	let category = null;
	return _forEach(Config.filters, (filter) => {
		category = null;
		if (type === "department") {
			category = _forEach(filter.departments, (department) => {
				if (data.department.match(new RegExp(department, "gi"))) return filter.alias;
				return null;
			});
		} else if (type === "aisle") {
			category = _forEach(filter.aisles, (aisle) => {
				if (data.aisle.match(new RegExp(aisle, "gi"))) return filter.alias;
				return null;
			});
		}
		if (category) return category;
		return null;
	});
};

export const removeBlackListedChars = (keyword) => {
	let keywordWithoutBlacklistedChars = keyword;
	const noNos = Config.blacklistedSearchChars;
	for (let i = 0; i < noNos.length; i += 1) {
		keywordWithoutBlacklistedChars = keywordWithoutBlacklistedChars.replace(noNos[i], "");
	}
	return keywordWithoutBlacklistedChars;
};

/**
 * This method parses through the department and aisle information and returns information based off
 * of what this method thinks is the best
 *
 * 1) checks the first two characters. If there is a number than it returns the number (aisle).
 *    otherwise it moves on
 * 2) Checks to see if the aisle has a department name in it. To do this it loops through possible
 *    department names based off an array that is stored in the config file. If it does it returns
 *    that department name. Otherwise it moves on.
 *      Ex. PRODUCEDRY-724A
 * 3) checks to see if there is a department. If there is then it returns that otherwise it moves
 *    on.
 * 4) If all of the previous steps fail then we return 'Grocery'.
 *
 * @param department
 * @param aisle
 * @return string || number - the parsed aisle numbers or department information
 */
export const parseLocation = (department, aisle) => {
	// Step 1
	if (aisle) {
		const firstThreeChars = Number(aisle.substring(0, 3));
		const firstTwoChars = Number(aisle.substring(0, 2));
		// Checks if the first three chars are numbers. If they are then we do not want to return an
		// aisle.
		if (Number.isNaN(firstThreeChars)
      && !Number.isNaN(firstTwoChars)
      && Config.numberOfAisles >= firstTwoChars) {
			// If the first two chars are a number and the aisle number is not greater than the total
			// number of aisles in the store.
			return `Aisle ${firstTwoChars}`;
		}
		// This check is for when aisle data is represented only by 2 digits; i.e. 03, 29, etc.
		if (firstThreeChars <= Config.numberOfAisles
      && !Number.isNaN(firstTwoChars)
      && Config.numberOfAisles >= firstTwoChars) {
			// If there are only 2 digits and they are less than or equal to the number of aisles return
			// that aisle number
			return `Aisle ${firstTwoChars}`;
		}

		// Step 2
		// Checks through an array in the config file and sees if there is a match in the aisle string
		// using regex
		const data = {};
		data.aisle = aisle;
		const aisleDepartment = checkCategories("aisle", data);

		if (aisleDepartment) {
			return capitalizeFirstLetters(aisleDepartment.toLowerCase());
		}
	}

	// Step 3
	if (department) {
		const departmentFromFilter = _forEach(Config.filters, filter =>
			_forEach(filter.departments, (departmentFromConfig) => {
				if (department.match(new RegExp(departmentFromConfig, "gi"))) return filter.alias;
				return null;
			}));
		if (departmentFromFilter) return departmentFromFilter;
	}

	// Step 4
	return "Grocery";
};

export const importAll = (r) => {
	const images = {};
	r.keys().forEach((item) => { images[item.replace("./", "")] = r(item); });
	return images;
};


// The following functions have been added for URL params processing :
const arrayToArrayString = (arrayObject )=>("["+ arrayObject.toString() +"]")
const encodeSpecialChars=(strToEncode)=>(strToEncode.replace('&', '_'))

export const  processQueryParams=(queryParams)=>{


	let processedQueryParams = { }

	for (let key in queryParams){

		console.log(key,queryParams[key] )

		if (queryParams[key] === "")
		{
			continue
		}
		else if (queryParams[key] instanceof  Array){
			processedQueryParams[key] = arrayToArrayString(queryParams[key])
			continue

		}
		else if (typeof queryParams[key]  === "string")
		{
			processedQueryParams[key] =  encodeSpecialChars(queryParams[key])
			continue
		}

		else{
			processedQueryParams[key] =queryParams[key]
		}
	}

	return processedQueryParams
}