/* Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space. */

function getFullName(firstName, lastName) {
	///Your code Starts here 
	
	if ((firstName != "") && (lastName != "")) {
		let sepSingleSpace = firstName + " " + lastName;
		return sepSingleSpace;
	} else {
		return firstName;
	}
	///Your code Ends here
}
/*
Lines For TestCase
getFullName("GUVI", "GEEK");
getFullName("GUVI" );
getFullName( "GEEK");
getFullName("", ""); 
*/