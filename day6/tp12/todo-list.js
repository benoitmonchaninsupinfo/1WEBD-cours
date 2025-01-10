import axios from "axios";

const todos = await axios("http://localhost:3000/todos");
console.log(todos.data);
