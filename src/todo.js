// todo class
console.log("HI!!!");

class Todo {
    constructor(title, description, dueDate, priority, checked = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checked = checked;
    }

    getTitle() {return this.title;}
    getDescription() {return this.description;}
    getDueDate() {return this.dueDate;}
    getPriority() {return this.priority;}
    isChecked() {return this.checked;}

    setTitle(title) {this.title = title;}
    setDescription(description) {this.description = description;}
    setDueDate(dueDate) {this.dueDate = dueDate;}
    setPriority(priority) {this.priority = priority;}

    toggleChecked() {
        this.checked = !this.checked;
    }
}

export default Todo;
