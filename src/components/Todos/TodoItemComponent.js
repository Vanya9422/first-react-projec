import React, {useContext} from 'react';
import PropTypes from "prop-types";
import Context from "../../context/context";

const TodoItemComponent = ({todo, index}) => {

    const {removeTodo, onChangeCompleted} = useContext(Context);

    return (
        <li className="list-group-item custom-control custom-checkbox pl-5">

            <input type="checkbox"
                   className="custom-control-input" id={`checkbox${index}`}
                   checked={todo.completed}
                   onChange={() => onChangeCompleted(todo.id)}
            />

            <label className={'custom-control-label ' + (todo.completed ? ' text-success' : '')}
                   htmlFor={`checkbox${index}`}>
                <strong>#{todo.id}</strong> {todo.title}
            </label>
            <button className="btn btn-outline-dark float-right btn-sm" onClick={() => removeTodo(todo.id)}>&times;</button>
        </li>
    );
};

TodoItemComponent.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
};

export default TodoItemComponent;
