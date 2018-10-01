define([], () => class {

    constructor({options}) {
        options.css = "todo-item/todo-item.css";
    }

    render({params}) {
        let {html, dataId}=params;
        this.id = dataId;
        return String.html`
            <div class="ToDoItem" id="item">
                <p class="ToDoItem-Text">${html}</p>
                <div class="ToDoItem-Delete" onclick="deleteClick">-</div>
            </div>`
    }

    deleteClick() {
        this.parent.removeItemById(this.id)
    }
})