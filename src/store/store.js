import React, {createContext, useContext, useReducer} from 'react';
import Constants from  "../utils/constants";

const StoreContext = createContext();
const initialState = {
    isLoading: true,
    todos: null,
    error: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case Constants.REQUEST_SUCCESSFUL:
            return {
                ...state,
                isLoading: false,
                error: null,
                todos: action.data,
            };
        case Constants.REQUEST_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            };
        case Constants.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, {
                    id: Math.floor(Math.random() * 100),
                    completed: false,
                    title: action.title
                }],
            };
        case Constants.CHANGE_COMPLETED:
            console.log(Constants.CHANGE_COMPLETED);
            return {
                ...state,
                todos: state.todos.filter( todo => {
                    if (todo.id !== action.id) todo.completed = !todo.completed;
                    return todo
                }),
            };
        case Constants.REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id),
            };
        case Constants.CLEAR_COMPLETED:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.completed !== true)
            };

        default:
            return state;
    }
};

export const StoreProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StoreContext.Provider value={{state, dispatch}}>
            {children}
        </StoreContext.Provider>
    )
};

export const useStore = () => useContext(StoreContext);