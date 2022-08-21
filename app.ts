enum state {
  active,
  completed,
  deleted,
}
interface ITodo {
  name: string;
  state: state;
}
class TodoStateChanger {
  constructor(private todo: ITodo) {}

  canStateChange(todo: ITodo): boolean {
    return !!todo;
  }
  changeTodoState(newState: state): ITodo {
    if (this.canStateChange(this.todo)) {
      if (this.todo.state === state.active) {
        console.log("todo Is Active");
        this.todo.state = newState;
        console.log("Todo State Changed");
        console.log("Todo State Is " + state[this.todo.state]);
        return this.todo;
      } else if (this.todo.state === state.completed) {
        console.log("No Need To Change .... Its Completed !");
        return this.todo;
      } else {
        console.log("Todo IS DELETED !!!!! and You cant Change IT");
        return this.todo;
      }
    } else {
      console.log("you cannot Change State Of Todo");
      return this.todo;
    }
  }
}

class Todo extends TodoStateChanger {
  constructor(todo: ITodo) {
    super(todo);
  }
}
const t1: ITodo = { name: "firstTodo", state: state.active };
const todo1 = new Todo(t1);

todo1.changeTodoState(state.completed);
