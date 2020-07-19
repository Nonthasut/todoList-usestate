import React, { useState } from 'react'

function TodoList() {
    const [text, setText] = useState('')
    const [list, setList] = useState([])
    const [checkList, setCheckList] = useState([])

    const addList = () => {
        setList([...list, text])
        setText('')
    }
    
    const deleteTodo=(index) => {
        list.splice(index, 1);
        setList([...list])
    }

    const moveToCheckList=(index) => {
    const targetMove = list.splice(index,1)
    setList([...list])
    setCheckList([...checkList,targetMove])
    }

    const deleteCheckTodo = (index) => {
        checkList.splice(index, 1);
        setCheckList([...checkList])
    }

    const moveToTodoList = (index) => {
        list.push(checkList.splice(index, 1));
        setList([...list])
    }

    return (
        <div>
            <h1>Todolist</h1>
            <input onChange={(e) => setText(e.target.value)} value={text}></input>
            <button onClick={addList}>Add</button>
            <ul>
                {list.map((listItem, index) => <li>{listItem}

                    <button onClick={()=>deleteTodo(index)}>Delete</button>

                    <button onClick={()=>moveToCheckList(index)}>Already Done</button>

                </li>)}
            </ul>
            <h1>Check list</h1>

            <ul>{checkList.map((doneItem, index) => <li>{doneItem}

                 <button onClick={()=>deleteCheckTodo(index)}>Delete</button>

                <button onClick={()=>moveToTodoList(index)}>Move this to todo list</button>
                
                </li>)}
                </ul>

        </div>
    )
}

export default TodoList
