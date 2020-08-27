import React from 'react';
import PropTypes from "prop-types";
import {useStore} from "../../store/store";

const TodoItemComponent = ({todo, index}) => {

    const {dispatch} = useStore();

    return (
        <li className="list-group-item custom-control custom-checkbox pl-5">

            <input type="checkbox"
                   className="custom-control-input" id={`checkbox${index}`}
                   checked={todo.completed}
                   onChange={() => dispatch({type: 'CHANGE_COMPLETED', id: todo.id})}
            />

            <label className={'custom-control-label ' + (todo.completed ? ' text-success' : '')}
                   htmlFor={`checkbox${index}`}>
                <strong>#{todo.id}</strong> {todo.title}
            </label>
            <button className="btn btn-outline-dark float-right btn-sm" onClick={() => dispatch({type: 'REMOVE_TODO', id: todo.id})}>&times;</button>
        </li>
    );
};

TodoItemComponent.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
};

export default TodoItemComponent;
