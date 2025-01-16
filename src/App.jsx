import React from "react";
import Navbar from './Components/Navbar'
import Sidebar from "./Components/sidebar";
import Home from "./Components/home";

const App = () =>{
  return(
    <main className="bg-black">
      <Navbar/>
      <section className="flex w-full bg-gray-900">
       <Sidebar/>
       <Home/>
      </section>          
    </main>
  )
}

export default App;