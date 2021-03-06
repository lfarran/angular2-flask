import {Injectable} from '@angular/core'
import {TodoModel} from './todo-model';

@Injectable()
export class TodoService{

    todos:TodoModel[] = [
        new TodoModel("First") ,
        new TodoModel("Second") ,
        new TodoModel("Third")
    ] ;


    addToTodos(todo: TodoModel){
        //new array, spread operator ... copy all todos and add a new todo to the end of array
        //reference is changing , the search pipe is working now
        this.todos = [...this.todos, todo];
    }

    toggleTodo(todo:TodoModel){
        todo.toggle();

        const i = this.todos.indexOf(todo);
        this.todos = [...this.todos.slice(0, i), todo, ...this.todos.slice(i+1)];
    }
}
