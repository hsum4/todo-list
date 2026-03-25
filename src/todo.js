class Todo {
    constructor(title, description, dueDate, priority, checked = false) {
        this.id = Date.now() + Math.random().toString(36).substr(2, 9);
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
}

export default Todo;
