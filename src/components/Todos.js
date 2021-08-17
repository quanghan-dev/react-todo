import { Fragment, useState } from 'react'
import TodoItem from './TodoItem'

const Todos = () => {
    const [todosState, setTodosState] = useState(
        [{
            title: "Việc 1",
            completed: false
        },
        {
            title: "Việc 2",
            completed: false
        },
        {
            title: "Việc 3",
            completed: false
        }]
    )

    return (
        <Fragment>
            {todosState.map(todo => {
                return <TodoItem todoProps={todo} />
            })}
        </Fragment>

    )
}

export default Todos