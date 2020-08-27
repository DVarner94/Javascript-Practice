// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false

// let username = prompt("Enter Username");
// let password = prompt("Enter Password");

// function isValidPassword(password, username){
//     if (password.length > 8 && password.indexOf(' ') !== -1 && password.indexOf(username) !== -1){
//         return true;
//     }
//     return false;
// };

// Option 1:
function isValidPassword(password, username){
    if (password.length <= 8){
        return false;
    }
    if (password.indexOf(' ') !== -1){
        return false;
    }
    if (password.indexOf(' ') !== -1){
        return false;
    }
    return true;
}

// Option 2:
function isValidPassword(password, username) {
	if (
		password.length < 8 ||
		password.indexOf(' ') !== -1 ||
		password.indexOf(username) !== -1
	) {
		return false;
	}
	return true;
}

// Colt's option:
function isValidPassword(password, username) {
	const tooShort = password.length < 8;
	const hasSpace = password.indexOf(' ') !== -1;
	const tooSimilar = password.indexOf(username) !== -1;
	if (!tooShort && !hasSpace && !tooSimilar) return true;
	return false;
}

// Colt's shorter option:
function isValidPassword(password, username) {
	const tooShort = password.length < 8;
	const hasSpace = password.indexOf(' ') !== -1;
	const tooSimilar = password.indexOf(username) !== -1;
	return !tooShort && !hasSpace && !tooSimilar;
} 
// ^^ return statement will result in true or false, doesn't NEED if,else statement