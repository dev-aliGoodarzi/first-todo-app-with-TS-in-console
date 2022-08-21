var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var state;
(function (state) {
    state[state["active"] = 0] = "active";
    state[state["completed"] = 1] = "completed";
    state[state["deleted"] = 2] = "deleted";
})(state || (state = {}));
var TodoStateChanger = /** @class */ (function () {
    function TodoStateChanger(todo) {
        this.todo = todo;
    }
    TodoStateChanger.prototype.canStateChange = function (todo) {
        return !!todo;
    };
    TodoStateChanger.prototype.changeTodoState = function (newState) {
        if (this.canStateChange(this.todo)) {
            if (this.todo.state === state.active) {
                console.log("todo Is Active");
                this.todo.state = newState;
                console.log("Todo State Changed");
                console.log("Todo State Is " + state[this.todo.state]);
                return this.todo;
            }
            else if (this.todo.state === state.completed) {
                console.log("No Need To Change .... Its Completed !");
                return this.todo;
            }
            else {
                console.log("Todo IS DELETED !!!!! and You cant Change IT");
                return this.todo;
            }
        }
        else {
            console.log("you cannot Change State Of Todo");
            return this.todo;
        }
    };
    return TodoStateChanger;
}());
var Todo = /** @class */ (function (_super) {
    __extends(Todo, _super);
    function Todo(todo) {
        return _super.call(this, todo) || this;
    }
    return Todo;
}(TodoStateChanger));
var t1 = { name: "firstTodo", state: state.active };
var todo1 = new Todo(t1);
todo1.changeTodoState(state.completed);
