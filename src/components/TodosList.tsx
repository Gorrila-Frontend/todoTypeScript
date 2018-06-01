import * as React from 'react';
import Todo from '../models/Todo';
import { Button } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

interface Props {
  todos: Todo[];
  outline: boolean
  onTodoClicked: (todoId: number) => any;
  color: any;
}
interface State {
  isCompleted: boolean;
  isActive: boolean;
  isFilter: boolean;
}

export default class AddTodo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isActive: false,
      isCompleted: false,
      isFilter: true
    }
  }
  handleFilterCompleted = () => {
      return this.setState({ 
        ...this.state, 
        isCompleted: !this.state.isCompleted,
        isActive: !this.state.isActive
      }) 
  }
  handleFilterActive = () => {
      return this.setState({ ...this.state, isActive: !this.state.isActive , isCompleted: false}) 
  }
  handleAllFilter= () => {
    if(this.state.isFilter)
{    
    return this.setState({
      isActive: false,
      isCompleted: false

    })
  }
  } 
  render() {
    const { todos, onTodoClicked } = this.props;
    return (
        <ListGroup>
          <div>
        <Button 
          onClick={this.handleFilterCompleted}
          color={this.state.isCompleted ?  'success' : 'primary'}
        >
        Completed
        </Button>
        {' '}
        <Button 
          onClick={this.handleFilterActive}
          color={this.state.isActive ?  'success' : 'primary'}
        >
        Active
        </Button>
        {' '}
        <Button 
          onClick={this.handleAllFilter}
          outline={true} 
          color="primary"
        >
        All
        </Button>
        {' '}
        </div>
        {
          this.listFilter(todos)
        }
      </ListGroup>
    );
  }

  listFilter = (todos) => {
    if (this.state.isCompleted) {
      return this.toggleFilterCompleted(todos).map(todo => (
        <ListGroupItem 
          key={todo.id}
          onClick={() => this.props.onTodoClicked(todo.id)}
          style={{ textDecoration: `${todo.done ? 'line-through' : ''}`, cursor: 'pointer' }}
        >
          {todo.name}
        </ListGroupItem>)
      )
    }
    else if (this.state.isActive) {
      return this.toggleFilterActive(todos).map(todo => (
        <ListGroupItem 
          key={todo.id}
          onClick={() => this.props.onTodoClicked(todo.id)}
          style={{ textDecoration: `${todo.done ? 'line-through' : ''}`, cursor: 'pointer' }}
        >
          {todo.name}
        </ListGroupItem >)
      )
    }  
    else if (this.state.isFilter) {
      return this.toggleAllFilter(todos).map(todo => (
        <ListGroupItem 
          key={todo.id}
          onClick={() => this.props.onTodoClicked(todo.id)}
          style={{ textDecoration: `${todo.done ? 'line-through' : ''}`, cursor: 'pointer' }}
        >
          {todo.name}
        </ListGroupItem >)
      )
    }  
   }

   toggleFilterCompleted = (todos) => {
    if (this.state.isCompleted) {
      return [...this.props.todos.filter(todo => todo.done )]
    }
   }

   toggleFilterActive = (todos) => {
    if (this.state.isActive) {
      return [...this.props.todos.filter(todo => !todo.done )]
    }
   }
   toggleAllFilter = (todos) => {
    if (this.state.isFilter) {
      return [...this.props.todos]
      
    }
   }

  }
  


