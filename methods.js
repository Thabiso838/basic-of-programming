let courses = ["HTML", "CSS","JS", "REACT"]

let total = courses.length
let convertor = courses.toString();
let caps = convertor.toUpperCase();
let smalls = convertor.toLowerCase();
let student = {
    firstName: "Dineo",
    secondName: "Dakalo",
    stipend:  6000
}




console.log(total)

console.log(`Elements inside courses are ${courses}`)
console.log(`Number of items in an array is ${total}`)
console.log(`This array becomes a list of strings ${convertor}`)
console.log(`Testing if string can call uppercase ${caps}`);
console.log(`Testing if string can call smaller case ${smalls}`)

console.log(delete student.stipend)
console.log(student)
console.log(`student info without stipend detail ${student}`)