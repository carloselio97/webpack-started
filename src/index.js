import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


 export const todoList=new TodoList();
 

todoList.todos.forEach(todo => { crearTodoHtml(todo)});

//const newTodo=new Todo('Aprende Javacripts');
console.log('todos', todoList.todos);

//todoList.todos[0].imprimirClase();



//const tarea=new Todo("Aprender Javacritp");
//todoList.nuevoTodo(tarea);
//console.log(tarea);
//console.log(todoList);

//crearTodoHtml(tarea)


//localStorage.setItem('mi-key','ABC123');
/*
setTimeout(() => {
    localStorage.removeItem('mi-key');
}, 1500);*/