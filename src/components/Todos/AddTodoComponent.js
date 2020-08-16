import React, {useContext, useState} from "react";
import PropTypes from "prop-types";
import Context from "../../context/context";
import hooks from "../../hooks/hooks";

const AddTodoComponent = () => {

    const {addTodo} = useContext(Context);
    const input = hooks.useInputValue('');

    function submitHandler(e) {
        e.preventDefault();
        if (input.value().trim()) addTodo(input.value().trim());
        input.clear();
    }

    return (
        <div className="w-100 pt-2 pb-2">
            <form className="form-inline w-100 justify-content-end" onSubmit={submitHandler}>
                <div className="form-group">
                    <input type="text" className="form-control mb-2 mr-sm-2" placeholder="Enter Todo" {...input.bind} />
                </div>
                <button type="submit" className="btn btn-primary mb-2">Add</button>
            </form>
        </div>
    )
};

AddTodoComponent.propTypes = {
    onCreateTodo: PropTypes.func.isRequired
};

export default AddTodoComponent;