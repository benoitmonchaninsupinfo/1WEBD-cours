const students = [
  { name: "John", age: 18, note: 11 },
  { name: "Jane", age: 19, note: 18 },
  { name: "Bob", age: 17, note: 7 },
];

const supinfoModule = {
  name: "1WEBD",
  professor: "Mme Martin",
  students,

  addStudent(name, age, note) {
    const newStudent = { name, age, note };
    this.students.push(newStudent);
  },

  getAverage() {
    let sum = 0;
    this.students.forEach((student) => (sum += student.note));

    return sum / this.students.length;
  },
};

console.log(supinfoModule.students);
console.log(supinfoModule.getAverage());

supinfoModule.addStudent("Billy", 20, 2);

console.log(supinfoModule.students);
console.log(supinfoModule.getAverage());
