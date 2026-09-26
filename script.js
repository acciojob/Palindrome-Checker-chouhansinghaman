// complete the given function

function palindrome(str){
	const strArr = []

	for(let i = (str.length-1); i>=0; i--){
		if(str[i]!=" ") strArr.push(str[i].toLowerCase())
	}
	
	return (strArr.join("")==(strArr.reverse().join(""))) ? true : false
}
module.exports = palindrome
