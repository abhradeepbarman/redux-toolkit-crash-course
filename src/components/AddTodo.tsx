import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addTodo({ text: todo }));
        setTodo("");
    };

    return (
        <form onSubmit={addTodoHandler}>
            <input
                type="text"
                placeholder="Add todo"
                name="todo"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodo;
