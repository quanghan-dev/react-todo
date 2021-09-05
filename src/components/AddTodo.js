import PropTypes from 'prop-types'
import React, { useState } from 'react'

const AddTodo = props => {
    const addTodo = props.addTodoFunc

    const [title, setTitle] = useState('')

    const addTodoFormStyle = {
        display: 'flex',
    }

    const addTodoInputStyle = {
        flex: '10',
        padding: '0.5rem'
    }

    const changeTitle = event => {
        setTitle(event.target.value)
    }

    const addSingleTodo = event => {
        event.preventDefault() // tranh trang web reload
        if (title !== '') {
            addTodo(title)
            setTitle('')
        }
    }

    return (
        <form style={addTodoFormStyle} onSubmit={addSingleTodo}>
            <input type="text"
                name="title"
                placeholder="Thêm việc"
                style={addTodoInputStyle}
                onChange={changeTitle}
                value={title}
            />
            <input type="submit" value="Thêm" className='btn' />
        </form>
    )
}

AddTodo.proTypes = {
    addTodoFunc: PropTypes.func.isRequired
}

export default AddTodo