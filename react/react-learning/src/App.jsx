import React from 'react'

const App = () => {
  const TextChange = () => {
    document.querySelector('p').innerText = 'My Name is Saurabh Pandey and I am a Software Engineer';
  }
  return (
    <>
      <h1 className='text-center text-5xl text-orange-500 mt-0 border-blue-200 border-4'>Information</h1>
      <p>My Name is Saurabh Pandey .. </p>
      <button onClick={TextChange}>click me</button>
    </>
  ) 
}

export default App
 
