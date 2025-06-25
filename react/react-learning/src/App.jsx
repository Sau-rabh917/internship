import React from "react";

const App = () => {
  const TextChange = () => {
    document.querySelector("p").innerText =
      "My Name is Saurabh Pandey and I am a Software Engineer";
  };
  return (
    <>
      <main className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="p-8 w-full max-w-6xl">
          {/* Removed the card section to avoid duplicate content */}
        </div>
      </main>
    </>
  );
};

export default App;
