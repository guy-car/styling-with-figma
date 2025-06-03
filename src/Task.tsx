export type TaskData = {
id: number,
name: string,
description: string,
checked: boolean
}


function Task({ taskData, toggleChecked }) {

    const checked = taskData.checked

    return (
        <div>
            <button onClick={toggleChecked}/>
            <div>
                <div>{taskData.name}</div>
                <div>{taskData.description}</div>
            </div>
        </div>
    )
}

export default Task


