import clsx from 'clsx'

function Message({ threadData, className}) {

    const baseMessageClass = 'w-150 p-4 m-2 rounded-xl'

    return (
            <div className={clsx(baseMessageClass, className)}>
                {threadData.content}
            </div>
    )
}

export default Message