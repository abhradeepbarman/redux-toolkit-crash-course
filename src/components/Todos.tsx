import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
    const todos: Todo[] = useSelector((state: RootState) => state.todo.todos);
    const dispatch = useDispatch();

    return (
        <div>
            {todos.map((todo: Todo) => (
                <div key={todo.id}>
                    <span>{todo.text}</span>
                    <button
                        onClick={() => dispatch(removeTodo({ id: todo.id }))}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Todos;
