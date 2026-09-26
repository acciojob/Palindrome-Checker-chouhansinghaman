// complete the given function

function palindrome(str){
	const originalStr = str
	const reversedStr = []

	for(let i = (str.length-1); i>=0; i--){
		if(str[i]!=" ") reversedStr.push(str[i])
	}

	return (originalStr==(reversedStr.join(""))) ? true : false
}
module.exports = palindrome
