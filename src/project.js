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

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(id) {
    const toBeRemovedIndex = (todo) => todo.id === id;
    const removedIndex = this.todos.findIndex(toBeRemovedIndex);
    if (removedIndex !== -1){
        this.todos.splice(removedIndex, 1);    
    }
  }

  //to do: findTodo function

}

export default Project;