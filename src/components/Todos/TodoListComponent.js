import React, {useContext} from 'react';
import TodoItemComponent from "./TodoItemComponent";
import PropTypes from "prop-types";
import Context from "../../context/context";
import AddTodoComponent from "./AddTodoComponent";

const TodoListComponent = props => {

    const { clearCompleted } = useContext(Context);

    function addTodo(title) {

    }

    return (
        <div className="container">
            <h1 className="text-center mt-1">List Group Todos</h1>
            <AddTodoComponent />
            <ul className="list-group">
                {props.todos.map((todo, key) => {
                    return <TodoItemComponent todo={todo} index={key} key={key} />
                })}
            </ul>
            <div className="form-group text-right pt-2">
                <button className="btn btn-success" onClick={() => clearCompleted()}>Clear Completed</button>
            </div>
        </div>
    );
};

TodoListComponent.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TodoListComponent;
