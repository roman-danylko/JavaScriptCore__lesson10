function show(data) {
  console.log(data);
}

console.log(`---------------------1---------------------`);
let Student = [
  { name: "Andriy", sex: "male", age: 24 },
  { name: "Petro", sex: "male", age: 38 },
  { name: "Olena", sex: "female", age: 18 },
  { name: "Oleksa", sex: "male", age: 22 },
  { name: "Alla", sex: "female", age: 24 },
];

let filterStudent = Student.filter(function (value) {
  return value.age < 24 && value.sex == "male";
});

filterStudent.forEach(show);
console.log(`---------------------2---------------------`);
// ----------------------------------------

filterStudent.map(function (value) {
  value.yearsUnderAge = 21 - value.age;
});

filterStudent.forEach(show);
console.log(`---------------------3---------------------`);
// --------------------------------------

Student.sort(function (a, b) {
  if (a.age > b.age) {
    return 1;
  } else if (a.age == b.age) {
    let aName = a.name.toLowerCase();
    let bName = b.name.toLowerCase();
    if (aName > bName) {
      return 1;
    } else {
      return -1;
    }
  } else {
    return -1;
  }
});

Student.forEach(show);
