import { useEffect, useState } from 'react'
import './App.css'

function App() {

  var myVariable = 1;
  const [color, setColor] = useState("olive")
  function updateVariable() {
    setInterval(() => {
      myVariable = Math.floor(Math.random() * 3) + 1;
      if (myVariable === 1){
        setColor("red")
      }
      else if(myVariable === 2){
        setColor("green")
      }
      else{
        setColor("blue")
      } // You can remove this line if you don't want to log the variable value
    }, 1000);
    
  }

  useEffect(() => {
    updateVariable()
  }, [])
  
  
  return (
    <>
      <div className="w-screen h-screen duration-200" style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-xl px-3 py-3 rounded-xl bg-white'>
            <button onClick={() => setColor("red")} className='outline-none px-4 py-2 shadow-2xl text-white' style={{ backgroundColor: "red" }}>RED</button>
            <button onClick={() => setColor("green")} className='outline-none px-4 py-2 shadow-2xl text-white' style={{ backgroundColor: "green" }}>GREEN</button>
            <button onClick={() => setColor("blue")} className='outline-none px-4 py-2 shadow-2xl text-white' style={{ backgroundColor: "blue" }}>BLUE</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
