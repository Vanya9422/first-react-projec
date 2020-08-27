export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const RESET_REQUEST = 'RESET_REQUEST';
export const REMOVE_TODO = 'REMOVE_TODO';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const CHANGE_COMPLETED = 'CHANGE_COMPLETED';

export default (state, action) => {
    switch (action.type) {
        case REQUEST_SUCCESSFUL:
            return {
                ...state,
                isLoading: false,
                error: null,
                todos: action.data,
            };
        case REQUEST_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            };
        case CHANGE_COMPLETED:
            console.log(CHANGE_COMPLETED);
            return {
                ...state,
                // todos: state.todos[action.key].completed = !state.todos[action.key].completed
            };
        case REMOVE_TODO:
            console.log(REMOVE_TODO);
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id),
            };
        case CLEAR_COMPLETED:
            console.log(CLEAR_COMPLETED)
            return {
                ...state,
                todos: state.todos.filter(todo => todo.completed !== true)
            };

        // usually I ignore the action if its `type` is not matched here, some people prefer throwing errors here - it's really up to you.
        default:
            return state;
    }
}
