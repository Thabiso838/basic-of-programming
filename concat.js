//concatenate is a method uesd to to combine or join two or more arrays into one
let intro = ["HTML", "CSS", "JS"];
let basics = ["Problem solving", "coding", "GTI"];
let fundamentals = ["Algorithms", "Function", "logics"];
let cs = intro.concat (basics, fundamentals)

console.log(cs)

//Flat method we use it to reduce nesting inside an array 
let courses = [["HTML", "CSS", "JS"]
["Problem Solving", "Function", "logics"]

]

let subject = courses.flat(Infinity)
console.log(subject)