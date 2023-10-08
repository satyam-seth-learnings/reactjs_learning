import { useSelector, useDispatch } from 'react-redux';
import { updateTodo } from '../features/todo/todoSlice';
import TodoItem from './TodoItem';

function Todos() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    const updateTodos = (updatedTodo) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === updatedTodo.id) {
                return { ...todo, text: updatedTodo.text };
            }
            return todo;
        });

        dispatch(updateTodo(updatedTodos));
    }

    return (
        <>
            <div>Todos</div>
            <ul className="list-none">
                {
                    todos.map(
                        todo => <TodoItem key={todo.id} todo={todo} updateTodos={updateTodos}/>
                    )
                }
            </ul>
        </>
    );
}

export default Todos;