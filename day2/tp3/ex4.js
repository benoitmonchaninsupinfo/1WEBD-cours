const students = [
  { name: "John", age: 18, note: 11 },
  { name: "Jane", age: 19, note: 18 },
  { name: "Bob", age: 17, note: 7 },
];

students.forEach((student) => {
  console.log(`${student.name} a eu une note de ${student.note}`);
});

const goodStudents = students.filter((student) => student.note > 12);
console.log("Les bons étudiants sont ", goodStudents);

const studentsNames = students.map((student) => student.name);
console.log("Les noms des étudiants :", studentsNames);
