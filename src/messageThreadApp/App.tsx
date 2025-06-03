

function App() {

  return (
    <div className='font-[Inter] bg-gray-200 flex flex-col'>
      <h1 className='text-4xl ml-5 pb-5 pt-5'>Task List</h1>
      <p className='text-sm ml-5'>Sorted by completion</p>
      <TaskList />
    </div>
  )
}

export default App
