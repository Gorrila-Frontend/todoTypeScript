import Todo from '../models/Todo';
let nextId = 1;

export enum ActionTypes {
    ADD_TODO = '[todos] ADD_TODO',
    TOGGLE_TODO = '[todos] TOGGLE_TODO',
    TOGGLE_FILTER = '[todos] TOGGLE_FILTER',
}
export interface AddTodoAction {
    type: ActionTypes.ADD_TODO;
    payload: { todo: Todo };
}
export interface ToggleTodoAction {
    type: ActionTypes.TOGGLE_TODO;
    payload: { todoId?: number};
}
export interface ToggleFilterAction {
    type: ActionTypes.TOGGLE_FILTER;
}
export function addTodo( name: string ): AddTodoAction {
    return {
        type: ActionTypes.ADD_TODO,
        payload: {
            todo: {
                id: nextId++,
                name: name,
                done: false,
                isActive: false,
            }
        }
    };
}
export function toggleTodo( todoId: number ): ToggleTodoAction {
    return {
        type: ActionTypes.TOGGLE_TODO,
        payload: { todoId }
    };
}
export function toggleFilter( ): ToggleFilterAction {
    return {
        type: ActionTypes.TOGGLE_FILTER,
    };
}
export type Action = AddTodoAction | ToggleTodoAction | ToggleFilterAction;