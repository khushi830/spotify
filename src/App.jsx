import React, { useState } from "react";
import Navbar from "./Components/Navbar";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  return (
    <div className="flex flex-col h-screen">
      
      <nav className="bg-black text-white flex justify-around items-center py-4">
        <Navbar />
      </nav>
    </div>
  );
};

export default App;
