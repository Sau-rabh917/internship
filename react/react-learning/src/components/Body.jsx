import React from "react";

const Body = () => {
  return (
    <div>
      <main className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-8 w-full max-w-6xl">
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <img
              src="https://www.hotelpanorama.in/wp-content/uploads/2020/01/jpg.jpg"
              alt="Card 1"
              className="w-24 h-24 rounded-full mb-4 object-cover"
            />
            <h2 className="text-xl font-bold mb-2">Card 1</h2>
            <p className="text-gray-600">This is the first card.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <img
              src="https://www.hotelpanorama.in/wp-content/uploads/2020/01/jpg.jpg"
              alt="Card 2"
              className="w-24 h-24 rounded-full mb-4 object-cover"
            />
            <h2 className="text-xl font-bold mb-2">Card 2</h2>
            <p className="text-gray-600">This is the second card.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <img
              src="https://www.hotelpanorama.in/wp-content/uploads/2020/01/jpg.jpg"
              alt="Card 3"
              className="w-24 h-24 rounded-full mb-4 object-cover"
            />
            <h2 className="text-xl font-bold mb-2">Card 3</h2>
            <p className="text-gray-600">This is the third card.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <img
              src="https://www.hotelpanorama.in/wp-content/uploads/2020/01/jpg.jpg"
              alt="Card 4"
              className="w-24 h-24 rounded-full mb-4 object-cover"
            />
            <h2 className="text-xl font-bold mb-2">Card 4</h2> 
            <p className="text-gray-600">This is the fourth card.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Body;
