import React from 'react'
import Body from './components/Body'
const Home = () => {
  return (
    <div className=" min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to MyWebsite!</h1>
      <p className="text-lg text-gray-700 mb-8">Explore our features and learn more about us.</p>
      <Body />
    </div>
  );
}

export default Home
