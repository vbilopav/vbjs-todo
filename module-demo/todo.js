define([], () => class {

    constructor({options}) {
        _app.customElements.define({tag: "todo-item", src: "todo-item/todo-item"});
        options.context = this;
        options.css = "todo.css";
        this.input = ""; // initial value
        this.list = ["clean the house", "buy milk"];
    }

    render() {
        let result = String.html`
            <div class="ToDo">
                <h1 class="ToDo-Header">VBJS To Do demo</h1>
                <div class="ToDo-Container">
                    <div class="ToDo-Content" id="content">`;
        
        for(let item of this.list) {
            result += String.html`
                <todo-item>${item}</todo-item>
            `;
        }
        result += String.html`
                    </div>
                    <input type="text" id="input" value="${this.value}" />
                    <div class="ToDo-Add" onclick="createNewToDoItem">+</div>
                </div>
            </div>`;

        return result;
    }

    createNewToDoItem() {
        let newElement = document.createElement("todo-item");
        newElement.innerHTML = this.model.input.value;
        this.model.content.appendChild(newElement);
    }

});