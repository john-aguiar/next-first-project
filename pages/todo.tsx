import { useEffect, useState } from "react";
import { Todo } from "../types/Todo";

type Props = {
    todo: Todo[]
}

const Todo = ({ todo }: Props) => {

    const [todoList, setTodoList] =useState<Todo[]>([])
    const [loading, setLoading] = useState(false)
   
    useEffect(() => {
        loadTodos();
    }, [])

    const loadTodos = async () => {
        setLoading(true)
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const list: Todo[] = await res.json();
        setTodoList(list)
        setLoading(false)
    }

    return(
        <div>
            <h1>Lista de Tarefas</h1>
            {loading && <div> Carregando...</div>}
            <ul>
                {todoList.map((todos, index)=> (
                    <li key={index}>
                        {todos.title} 
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo;

