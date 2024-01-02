/* Given an array, "getLastElement" returns the last element of the given array. If the given array has a length of 0, it should return '-1'. */

function getLastElement(array) {
	///Your code Starts here 
	
	if (0 < array.length) {
		let lastElmt = array[array.length - 1];
		return lastElmt;
	} else {
		return -1;
	}
	
	
	
	///Your code Ends here
}
/*
Lines For TestCase

getLastElement([1, 2, 3, 4]);
getLastElement([1, 2, 3, 4,5,6,7]);
getLastElement([]);
*/