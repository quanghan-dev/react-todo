import { Fragment, useState } from 'react'
import TodoItem from './TodoItem'

const Todos = () => {
    const [todosState, setTodosState] = useState(['Việc 1', 'Việc 2', 'Việc 3'])

    return (
        <Fragment>
            {todosState.map(todo => {
                return <TodoItem todoProps={todo} />
            })}
        </Fragment>

    )
}

export default Todos