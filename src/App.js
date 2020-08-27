import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoListComponent from "./components/Todos/TodoListComponent";
import { StoreProvider } from "./store/store";

const App = () => {

    return (
        <StoreProvider>
            <div className="App">
                <header className="App-header">
                    <TodoListComponent/>
                </header>
            </div>
        </StoreProvider>
    );
};

export default App;
