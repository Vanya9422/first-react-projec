import React, {useEffect} from 'react';
import TodoItemComponent from "./TodoItemComponent";
import AddTodoComponent from "./AddTodoComponent";
import Loader from "../Loader/LoaderComponent";
import {useStore} from "../../store/store";

const TodoListComponent = () => {

    const {state, dispatch} = useStore();

    useEffect( () => {

        const abortController = new AbortController();

        const fetchData = async () => {

            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=20', {signal: abortController.signal});

                if (!response.ok)
                    throw new Error(`${response.status} ${response.statusText}`);

                const json = await response.json();
                dispatch({type: 'REQUEST_SUCCESSFUL', data: json});
            } catch (e) {
                // only call dispatch when we know the fetch was not aborted
                if (!abortController.signal.aborted) {
                    dispatch({type: 'REQUEST_FAILED', error: e.message});
                }
            }
        };

        fetchData();

        return () => {
            abortController.abort();
        };

    }, [dispatch]);

    return (
        <div className="container">
            <h1 className="text-center mt-1">List Group Todos</h1>
            <AddTodoComponent/>
            { state.isLoading ? <Loader/> : (
                <ul className="list-group">
                    {state.todos.map((todo, key) => {
                        return <TodoItemComponent todo={todo} index={key} key={key}/>
                    })}
                </ul>
            )}
            <div className="form-group text-right pt-2">
                <button className="btn btn-success" onClick={() => dispatch({type: 'CLEAR_COMPLETED'})}>Clear
                    Completed
                </button>
            </div>
        </div>
    );
};

export default TodoListComponent;
