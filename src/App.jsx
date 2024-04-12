import { useState } from "react";


function App() {
  var [a,b] =  useState(10);
  return (
       <div className="w-full-screen h-screen bg-zinc-900 text-white">
        <h1>{a}</h1>
        <button onClick={()=>b(a+1)} className="bg-green-500 px-4 py-2 rounded-xl">Click</button>
       </div>
  

    
  )
}
export default App;