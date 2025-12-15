const student = require("./StudentInfo");
const person = require("./Person");

function EmployeeInfo(name, Salary) {
  console.log("Welcome " + name + "\nYour monthly Salary is " + Salary);
}

const EmpSkills = (skills) => {
  console.log("Expert in " + skills);
};

console.log("This is my first program");

var EmpName = "Segun";
var EmpSalary = 50000;

EmployeeInfo(EmpName, EmpSalary);
EmpSkills("Java");

console.log("Student Name:" + student.getName());
console.log(student.Location());
console.log(student.dob);

console.log(student.Studentgrade());
console.log("Grade: " + student.Studentgrade(55));

var person1 = new person("Segun", "34", "segun@gmail.com");
console.log("Using Person Module", person1.getPersonInfo());
console.log("Program Ended");
