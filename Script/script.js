let course1 = {code: "1310", coursename: "Math", precentage: "N/A"};
let course2 = {code: "1116", coursename: "Communications", precentage: "N/A"};
let course3 = {code: "1620", coursename: "Web Tech", precentage: "N/A"};
let course4 = {code: "1100", coursename: "Orginanizational Behaviour", precentage: "N/A"};
let course5 = {code: "1630", coursename: "DataBase", precentage: "N/A"};
let course6 = {code: "1420", coursename: "Systems Admin", precentage: "N/A"};
let course7 = {code: "1515", coursename: "Scripting", precentage: "N/A"};


let courselist = [course1, course2, course3, course4, course5, course6, course7];

console.log(courselist);

let input = null;
do{
    input = prompt("Enter a 4 digit number!")}
    while(isNaN(input) == true || input.length !== 4);

let check = false;
for(let i of courselist){
    if(i.code.includes(input))
    {
        console.log(`Yes I am taking that course: ${i.code} -- ${i.coursename}`)
        check = true;
    } 
}
if (check === false){
    courselist.push({code: `ACIT ${input}`, coursename: null})
    console.log(`Object '${input}' added to courselist`)
}

// let input = null;

// do{
//     input = prompt("Enter a 4 digit number!")}
//     while(isNaN(input) == true || input.toString().length > 4 || input.toString().length < 4);


// let check = false;
// for (let mycourses of courselist){
//     if (mycourses.code.includes(input)){
//     console.log(`Yes, I am taking the course: ACIT - ${mycourses.code}, ${mycourses.coursename}`)
//     check = true;
//     }
// }

// if (check === false){
//     courselist.push({code: `${input}`, coursename: null})
//     console.log(`Object '${input}' added to courselist`)
// }