

//Level 1 

//1
let challenge = 'World of JavaScript'

//2
console.log(challenge)

//3
console.log(challenge.length)

//4
console.log(challenge.toUpperCase())

//5
console.log(challenge.toLowerCase())

//6
console.log(challenge.substring(0,5))

//7
console.log(challenge.substring(7,19))

//8
console.log(challenge.includes("Script"))

//9
console.log(challenge.split(''))

//10
console.log(challenge.split(' '))

//11
let mnc =  'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(mnc.split(','))

//12
console.log(`Welcome to ${challenge.replace('JavaScript', 'Python')}`)

//13
console.log(challenge.charAt(15))

//14
console.log(challenge.charCodeAt('J'))

//15
console.log(challenge.indexOf('a'))

//16
console.log(challenge.lastIndexOf('a'))

//17
let para = 'You cannot end a sentence with because because because is a conjunction'
console.log(para.indexOf('because'))

//18
console.log(para.lastIndexOf('because'))

//19
console.log(para.search('because'))

//20
challenge1 = ' CSS Magic  '
console.log(challenge1.trim())

//21
console.log(challenge.startsWith('World'))

//22
console.log(challenge.endsWith('Script'))

//23
let pattern = /a/gi
console.log(challenge.match(pattern))

//24
let string = "Welcome to "
console.log(string.concat(challenge, "."))

//25
console.log(challenge.repeat(2))

//level - 2

//1
let statement1 = "The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' \
 by John Holmes teaches us to help one another."
 console.log(statement1)

 //2
 let statement2 = "Love is not patronizing and charity isn\'t about pity, it is about love. \
Charity and love are the same -- with charity you give love, so don\'t just \
give money but reach out your hand instead."
console.log(statement2)

//3
let num1 = '10'
let num2 = 10
console.log(typeof(num1) == typeof(num2)) //false
num1 = parseInt(num1)
console.log(typeof(num1)) //Number

//4
let num3 = 9.8
let num4 = 10
console.log(num3 == num4) //false
num3 = Math.round(num3)
num3 = parseInt(num3)
console.log(num3) //10

//5
let lan1 = 'python, jargon'
console.log(lan1.match(/on/g))

//6
let sentence3 = "I hope this course is not full of jargon"
console.log(sentence3.search('jargon'))


//7
console.log(Math.random()*100)