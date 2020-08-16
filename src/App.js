import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoListComponent from "./components/Todos/TodoListComponent";
import Context from "./context/context";

const App = () => {

    const [todos, setToDos] = useState([
        {id: Math.floor(Math.random() * 100), completed: false, title: "title_" + Math.floor(Math.random() * 100)},
        {id: Math.floor(Math.random() * 100), completed: false, title: "title_" + Math.floor(Math.random() * 100)},
        {id: Math.floor(Math.random() * 100), completed: false, title: "title_" + Math.floor(Math.random() * 100)},
        {id: Math.floor(Math.random() * 100), completed: false, title: "title_" + Math.floor(Math.random() * 100)},
        {id: Math.floor(Math.random() * 100), completed: false, title: "title_" + Math.floor(Math.random() * 100)},
        {id: Math.floor(Math.random() * 100), completed: false, title: "title_" + Math.floor(Math.random() * 100)},
        {id: Math.floor(Math.random() * 100), completed: false, title: "title_" + Math.floor(Math.random() * 100)},
        {id: Math.floor(Math.random() * 100), completed: false, title: "title_" + Math.floor(Math.random() * 100)},
        {id: Math.floor(Math.random() * 100), completed: false, title: "title_" + Math.floor(Math.random() * 100)},
        {id: Math.floor(Math.random() * 100), completed: false, title: "title_" + Math.floor(Math.random() * 100)},
    ]);

    function removeTodo(id) {
        setToDos(
            todos.filter(todo => todo.id !== id)
        );
    }

    function clearCompleted() {
        setToDos(
            todos.filter(todo => todo.completed !== true)
        );
    }

    function onChangeCompleted(id) {
        setToDos(
            todos.map(todo => {
                if (todo.id === id) todo.completed = !todo.completed;
                return todo;
            })
        );
    }

    function addTodo(title) {
        setToDos(
            todos.concat([{
                id: Math.floor(Math.random() * 100),
                completed: false,
                title: title
            }])
        );
    }

    return (
        <Context.Provider value={{removeTodo, clearCompleted, onChangeCompleted, addTodo}}>
            <div className="App">
                <header className="App-header">
                    <TodoListComponent todos={todos}/>
                </header>
            </div>
        </Context.Provider>
    );
};

export default App;
