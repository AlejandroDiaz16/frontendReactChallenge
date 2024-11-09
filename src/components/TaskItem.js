import React, { useReducer, useState } from 'react'
import api from '../api'

export default function TaskItem({task, onUpdate}) {
  //variables
  const [isEdit, setIsEdit] = useState(false);

  // update task reducer
  const updateTask = (state, action) => {
    switch (action.type) {
      case 'UPDATE_NAME':
        return {
          ...state,
          name: action.value
        }
      case 'CHANGE_COMPLETITION':
        return {
          ...state,
          completed: !state.completed
        }
      case 'CHANGE_DUE_DATE':
        return {
          ...state,
          dueDate: action.value
        }
      default:
        return state
    }
  }
  const [newTask, dispatcher] = useReducer(updateTask, task)

  // delete task
  const deleteTask = async () => {
    const resp = await api(`/tasks/deleteTask/${task.id}`, {method: 'DELETE'})
    if (resp.error) {
      console.log('There was an error deleting the task')
    } else {
      console.log('task deleted succesfully')
    }
    onUpdate()
  }

  //saveTask
  const saveTask = async () => {
    const resp = await api(`/tasks/updateTask/${newTask.id}`, {method: 'PUT', body: newTask});
    if (resp.error) {
      console.log('There was an error updating the task')
    }
    onUpdate()
  }
  

  return (
      <div>
        <li>
          {task.name} with priority {task.priority} {task.completed ? 'is completed' : `is due to finish ${task.dueDate}`}
          <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
          {!isEdit && <button onClick={() => deleteTask()}>Delete</button>}
          {isEdit && <button onClick={() => saveTask()}>Save</button>}
        </li>
          {isEdit && (
            <div>
              <div>
                <label>Task name</label>
                <input
                    type='text'
                    value={newTask.name}
                    onChange={(e) => dispatcher({type: 'UPDATE_NAME', value: e.target.value})}
                />
              </div>
              <div>
                <label>Change completition</label>
                <input
                    type='checkbox'
                    checked={newTask.completed}
                    onChange={(e) => dispatcher({type: 'CHANGE_COMPLETITION'})}
                />
              </div>
              <div>
                <label>Due date</label>
                <input
                    type='date'
                    value={newTask.dueDate}
                    onChange={(e) => dispatcher({type: 'CHANGE_DUE_DATE', value: e.target.value})}
                />
              </div>
            </div>
          )}
      </div>
  )
}