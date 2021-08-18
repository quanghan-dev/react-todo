import { Fragment, useState } from 'react'
import TodoItem from './TodoItem'

const Todos = () => {
    const [todosState, setTodosState] = useState(
        [{
            id: 1,
            title: "Việc 1",
            completed: false
        },
        {
            id: 2,
            title: "Việc 2",
            completed: false
        },
        {
            id: 3,
            title: "Việc 3",
            completed: false
        }]
    )

    const markComplete = id => {
        const newTodos = todosState.map(todo => {
            if (todo.id === id) todo.completed = !todo.completed
            return todo
        })

        setTodosState(newTodos)
    }

    const deleteTodo = id => {
        const newTodos = todosState.filter(todo => todo.id !== id)

        setTodosState(newTodos)
    }

    return (
        <Fragment>
            {todosState.map(todo => {
                return <TodoItem
                    key={todo.id}
                    todoProps={todo}
                    markCompleteFunc={markComplete}
                    deleteTodoFunc={deleteTodo}
                />
            })}
        </Fragment>

    )
}

export default Todos