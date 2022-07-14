import { useState } from 'react';

const Todo = (props) => {
    const [todo, setTodo] = useState("");
    const [isComplete, setIsComplete] = useState(false);
    const onSubmitHandler = e => {
        e.preventDefault();
        const toDoItem = {
            todo : todo,
            isComplete: isComplete
        };
        console.log(toDoItem);
        props.newItem(toDoItem);
    }
    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="todo">To do:</label>
                    <input type="text" name="todo" onChange={(e) => setTodo(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="isComplete">Complete?</label>
                    <input type="checkbox" name="isComplete" checked={isComplete} onChange={(e) => setIsComplete(!isComplete)}/>
                </div>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}

export default Todo;