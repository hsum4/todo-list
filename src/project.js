class Project {
  constructor(name) {
    this.id = Date.now() + Math.random().toString(36).substr(2, 9);
    this.name = name;
    this.todos = [];
  }

  getId() {return this.id;}
  getName() {return this.name;}
  getTodos() {return this.todos;}

  setName(name) {this.name = name;}

  addTodo(id) {

  }
  removeTodo(id) {

  }
}