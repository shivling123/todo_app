import React, { useContext } from 'react';
import { AiOutlineEdit} from 'react-icons/fa';
import { AiFillEdit,AiFillDelete} from "react-icons/ai";

import { TaskListContext } from '../contexts/TaskListContext'

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext)
  return (
    <>
    <li className="list-item">
      <span style={{ color:'white'}}>{task.title}  </span>
      <div>
        <button
          className="btn-delete task-btn"
          onClick={() => removeTask(task.id)}
        > 
        <AiFillDelete style={{ color:'white'}} size={20} />
          <i className="fas fa-trash-alt"></i>
        </button>{' '}
        <button className="btn-edit task-btn" onClick={() => findItem(task.id)}>
        <AiFillEdit style={{ color:'white'}} size={20}/> <i  style={{color:'white'}} className="fas fa-pen"></i>
        </button>
      </div>
    </li>
    <hr/>
    </>
  )
}

export default Task
