// complete the given function

function palindrome(str){
	const originalStr = str
	const reversedStr = str.split("").reverse().join("")

	return (originalStr==reversedStr) ? true : false
}
module.exports = palindrome
