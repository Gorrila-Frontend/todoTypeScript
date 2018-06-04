import * as React from 'react';
import Todos from '../containers/Todos';
import AddTodo from '../containers/AddTodo';

class App extends React.Component {
    render () {
        return (
            <div>
                <h1>Gorrila Tasks</h1>
                <AddTodo />
                <Todos />
            </div>
        );
    }
}
export default App;