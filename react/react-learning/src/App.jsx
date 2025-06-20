import React from 'react'

const App = () => {
  const TextChange = () => {
    document.querySelector('p').innerText = 'My Name is Saurabh Pandey and I am a Software Engineer';
  }
  return (
    <>
      <h1>Information</h1>
      <p>My Name is Saurabh Pandey .. </p>
      <button onClick={TextChange}>click me</button>
    </>
  )
}

export default App
