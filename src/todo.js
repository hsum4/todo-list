// todo class
console.log("HI!!!");

class Todo {
    constructor(id, title, description, dueDate, priority, checked = false) {
        this.id = this.generateId();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checked = checked;
    }

    getId() {return this.id;}
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

    generateId() {
        return Date.now() + Math.random().toString(36).substr(2, 9);
    }

}

export default Todo;
