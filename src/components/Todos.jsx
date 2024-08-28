import  { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector((state) => state.todos)
  const [editingId, setEditingId] = useState(null)
  const [newText, setNewText] = useState('')
  const dispatch = useDispatch()

  const handleEditClick = (todo) => {
    setEditingId(todo.id)
    setNewText(todo.text)
  }

  const handleUpdateClick = (id) => {
    dispatch(updateTodo({ id, text: newText }))
    setEditingId(null)
    setNewText('')
  }

  return (
    <div>
      <h3>Todos</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded">
            
            {editingId === todo.id ? (
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              />
            ) : (
              <div className='text-white'>{todo.text}</div>
            )}
            {editingId === todo.id ? (
              <button onClick={() => handleUpdateClick(todo.id)}>Update</button>
            ) : (
              <button onClick={() => handleEditClick(todo)}>Edit</button>
            )}
            <button className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md" onClick={() => dispatch(removeTodo(todo.id))}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos
