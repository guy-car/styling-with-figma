import { useState } from 'react'
import Task, {type TaskData } from './Task'

  const intialTasks: TaskData[] = [
  {
    id: 0,
    name: 'TailWind',
    description: 'Have fun making some designs today',
    checked: false
  },
  {
    id: 1,
    name: 'TypeScript',
    description: 'Get better at it',
    checked: false
  },
  {
    id: 2,
    name: 'Espresso machine',
    description: 'Find the missing component',
    checked: false
  }
]

function TaskList() {

  const [tasks, setTasks] = useState(intialTasks)

  const toggleTask = (taskId: number) => {
    setTasks((prev) => {
        const newTasks = structuredClone(prev)
        const taskToChange = newTasks.find((task) => task.id === taskId)
        if (!taskToChange) return newTasks
        taskToChange.checked = !taskToChange.checked
        return newTasks
    })
  }

  const sortedTasks = tasks.sort((task1, task2) => task1.checked ? -1 : 1)

  return (

    sortedTasks.map(task => <Task key={task.id} taskData={task} toggleChecked={() => toggleTask(task.id)}/>)
  )
}

export default TaskList