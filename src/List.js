import uuid from 'react-uuid'
import Row from './Row';
import Form from './Form'
import {Todo} from './Todo'
import React from 'react'

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todos: new Array(new Todo('Test 1', 'Test description'))};
    }

    addToList = (title, description) => {
        this.setState(prevState => ({
            todos: [...prevState.todos, new Todo(title, description)]
        }))
    }

    render() {
        return (
            <div>
                <h3>Todos</h3>
                <Form add={this.addToList}/>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map(item => (
                            <Row key={uuid()} title={item.title} description={item.description}/>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
