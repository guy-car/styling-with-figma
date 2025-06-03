import Message from './Message'
import clsx from 'clsx'

const initialData = [
    {
        id: 0,
        sender: 'cat',
        content: "I just completed my first 10k run this morning, and I feel amazing! It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I'm enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know!"
    },
    {
        id: 1,
        sender: 'cat',
        content: "I'm planning a weekend getaway to the mountains and can't wait to disconnect from the hustle and bustle of city life. I've booked a cozy cabin with a fireplace, and I'm looking forward to some hiking, stargazing, and simply enjoying the peace and quiet."
    },
    {
        id: 2,
        sender: 'dog',
        content: "I've decided to take up a new hobby and start learning how to play the piano. It's something I've always wanted to do, and I finally signed up for lessons. The first few sessions have been challenging, but I love the feeling of progress with each practice."
    },
    {
        id: 3,
        sender: 'cat',
        content: "I just completed my first 10k run this morning, and I feel amazing! It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I'm enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know!"
    }
]

const userData = [
    {
        userName: 'dog',
        photoUrl: 'https://i.imgur.com/c3Y6FjI.jpeg'
    },
    {
        userName: 'cat',
        photoUrl: 'https://i.imgur.com/nj5o4JB.jpeg'
    }
]

function Thread() {

    const currentUser = 'cat'

    return (
        initialData.map((message, index) => {

            const currentMessage = message
            const sameAsPrevious = initialData[index - 1] && initialData[index - 1].sender === currentMessage.sender
            const sameAsNext = initialData[index + 1] && initialData[index + 1].sender === currentMessage.sender
            
            // Determine position as string
            let position
            if (sameAsPrevious && sameAsNext) {
                position = 'middle'
            } else if (!sameAsPrevious && sameAsNext) {
                position = 'top'
            } else if (sameAsPrevious && !sameAsNext) {
                position = 'bottom'
            } else {
                position = 'single'
            }

           // Map position to CSS classes
            const positionClasses = {
                'single': '',
                'top': 'rounded-br-none',
                'middle': 'rounded-br-none rounded-tr-none',
                'bottom': 'rounded-tr-none'
            }
            
            // Show avatar only for top and single positions
            const showAvatar = position === 'top' || position === 'single'
            const avatarUrl = showAvatar ? (message.sender === 'dog' ? userData[0].photoUrl : userData[1].photoUrl) : null
            const avatarPosition = message.sender === currentUser ? 'right' : 'left'
            const userClass = currentUser === message.sender ? 'ml-auto bg-light-blue-500' : 'ml-right-auto bg-gray-200'

            return (
                <div key={message.id} className='grid grid-cols-[60px_1fr_60px] gap-2 items-start'>
                    <div className='flex justify-center'>
                        {avatarPosition === 'left' && avatarUrl && (
                            <img src={avatarUrl} className='h-15 w-15 mt-2 rounded-4xl'/>
                        )}
                    </div>
                    <Message 
                        className={clsx(positionClasses[position], userClass)} 
                        threadData={message}
                    />
                    <div className="flex justify-center">
                        {avatarPosition === 'right' && avatarUrl && (
                            <img src={avatarUrl} className='h-15 w-15 mt-2 rounded-4xl'/>
                        )}
                    </div>
                </div>
            )
    })
)}

export default Thread