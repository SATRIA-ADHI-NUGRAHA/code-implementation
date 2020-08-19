let checkPalindrom = (text) => {
	let str = text.split('').reverse().join('')
	if(text.toLowerCase()===str.toLowerCase()){
		console.log(`Kata ${text} adalah Palindrom`)
	}else{
		console.log(`Kata ${text} bukan Palindrom`)
	}
}

checkPalindrom('Malam')
