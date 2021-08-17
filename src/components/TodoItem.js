

const TodoItem = props => {

    const todo = props.todoProps

    //Style
    const todoItemStyle = {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: todo.completed ? 'line-through' : 'none',
        marginRight: '10rem',
        marginLeft: '10rem',
    }

    const deleteButtonStyle = {
        background: '#ff0000',
        color: '#fff',
        border: 'none',
        padding: '5px 9px',
        borderRadius: '6px',
        cursor: 'pointer',
        float: 'right',
        marginRight: '5rem'
    }

    //Return
    return (
        <p style={todoItemStyle}>
            <input type="checkbox" />
            {todo.title}
            <button style={deleteButtonStyle}>Delete</button>
        </p>
    )
}

export default TodoItem