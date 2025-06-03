import clsx from 'clsx'

export type TaskData = {
id: number,
name: string,
description: string,
checked: boolean
}


function Task({ taskData, toggleChecked }) {

    const checked = taskData.checked
    
    const buttonClassBase = 'p-2 m-2 mr-4 border border-gray-300 rounded-md w-5 h-5'

    const taskClassBase = 'h-[80px] w-[450px] p-4 m-4 flex items-center rounded-xl border-1 border-gray-300'
    const taskClassChecked = 'bg-green-100'
    const taskClassUnchecked = 'bg-white'

    return (
        <div className={clsx(taskClassBase, checked ? taskClassChecked : taskClassUnchecked)} >
            <button onClick={toggleChecked} className={clsx(buttonClassBase, checked? 'bg-green-600 border-0' : null)}></button>
            <div>
                <div className='text-lg'>{taskData.name}</div>
                <div className='text-sm text-gray-400'>{taskData.description}</div>
            </div>
        </div>
    )
}

export default Task


