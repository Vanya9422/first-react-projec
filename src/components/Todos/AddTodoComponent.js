import React from "react";
import hooks from "../../hooks/hooks";
import {useStore} from "../../store/store";

const AddTodoComponent = () => {

    const {dispatch} = useStore();
    const input = hooks.useInputValue('');

    function submitHandler(e) {
        e.preventDefault();
        if (input.value().trim()) dispatch({type: 'ADD_TODO', title: input.value().trim()});
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

export default AddTodoComponent;