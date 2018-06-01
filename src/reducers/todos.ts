import Todo from '../models/Todo';
import { ActionTypes, Action, toggleFilter } from '../actions/todos';

export interface State {
    todos: Todo[],
}

export const initialState: State = {
    todos: [],
}
export function reducer(state: State = initialState, action: Action) {
    switch (action.type) {
        case ActionTypes.ADD_TODO: {
            const todo = action.payload.todo
    
            return {
                ...state,
                todos: [
                    ...state.todos, todo, 
                ]
            }
    
        }
        case ActionTypes.TOGGLE_TODO: {
            const { todoId } = action.payload
            return {
                ...state, 
                todos: state.todos.map( 
                    (todo) => (todo.id === todoId) 
                    ? {...todo , done: !todo.done, isActive: !todo.isActive } 
                    : todo  )
            }
        }

        default: 
            return state
    }
}