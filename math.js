const PI = Math.PI
console.log(PI)
console.log(Math.round(PI))
console.log(Math.round(9.81))
console.log(Math.floor(PI))
console.log(Math.ceil(PI))
console.log(Math.min(-5,3,20,4,5,10))
console.log(Math.max(-5,3,20,4,5,10))

const randNum = Math.random()
console.log(randNum)

const num = Math.floor(Math.random()*11)
console.log(num)

console.log(Math.abs(-10))

console.log(Math.sqrt(100))
console.log(Math.sqrt(2))

console.log(Math.pow(3,2))
console.log(Math.E)


let space = ' '
let fname= "Shubhankar"
let lname = "Patel"
let country = "India"
let city = "Kanpur"
let language = "Javascript"
let age="19"

let fullname= fname+space+lname
console.log(fullname)

let personInfoOne = fullname+" I am "+age+" I live in "+city
console.log(personInfoOne)

let personInfoTwo = `I am ${fullname}. I am ${age} years old. I live in ${city},${country}. I am learning ${language}.`
console.log(personInfoTwo)