import Todo from "./todo";
import Project from "./project";

// test the Todo class
const myTodo = new Todo("Buy groceries", "Milk, Bread, Eggs", "2024-07-01", "High", true);
console.log(myTodo);

//test the Project class
const myProject = new Project("My Todo List")

myProject.addTodo(myTodo);
console.log(myProject.getTodos());

myProject.removeTodo(myTodo.getId());
console.log(myProject.getTodos());
