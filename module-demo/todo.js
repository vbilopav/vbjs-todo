define([], () => class {

    constructor({options}) {
        _app.customElements.define({tag: "todo-item", src: "todo-item/todo-item"});
        options.css = "todo.css";

        this.input = ""; // initial value
        this._items = {
            1: "clean the house", 
            2: "buy milk"
        }
    }

    render() {
        let result = String.html`
            <div class="ToDo">
                <h1 class="ToDo-Header">VBJS To Do demo</h1>
                <div class="ToDo-Container">
                    <div class="ToDo-Content" id="content">`;
        
        for(let [id, value] of Object.entries(this._items)) {
            result += String.html`
                <todo-item data-id="${id}">${value}</todo-item>
            `;
        }
        result += String.html`
                    </div>
                    <input type="text" id="input" value="${this.value}" onkeyup="handleKeyUp" />
                    <div class="ToDo-Add" onclick="handleAddClick">+</div>
                </div>
            </div>`;

        return result;
    }

    addNewItem(value) {
        let newId = Math.max(...Object.keys(this._items)) + 1,
            newElement = document.createElement("todo-item");
        this._items[newId] = value;
        this.model.content.appendChild(newElement.html(value).attr("data-id", newId));
    }

    removeItemById(id) {
        if (this._items[id] === undefined) {
            return;
        }
        delete this._items[id];
        this.model.content.find(`todo-item[data-id='${id}']`).remove();
    }

    handleAddClick() {
        this.addNewItem(this.model.input.value);
    }

    handleKeyUp(e) {
        if (this.model.input.value === "") {
            return;
        }
        if (e.key !== "Enter") {
            return;
        }
        this.addNewItem(this.model.input.value);
    };

});