import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  return (
    <div className="flex flex-col h-screen">
      
      <nav className="bg-black text-white flex justify-around items-center py-4">
        <Navbar />
      </nav>

      
      <div className="flex w-full h-screen bg-[#1f1f1f] ">
        
        <div
          className={`transition-all duration-300 bg-black h-screen text-white ${
            isSidebarOpen ? "w-1/4" : "w-0"
          } `}
        >
          <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        </div>

        
        <div
          className={`transition-all duration-300 ${
            isSidebarOpen ? "w-3/4" : "w-full"
          }`}
        >
          <Home />
        </div>
      </div>
    </div>
  );
};

export default App;
