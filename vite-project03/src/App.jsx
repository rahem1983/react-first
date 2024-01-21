import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  // let counter = 8
  let [counter, setCounter] = useState(0)
  const addValue = () => {
    // console.log("data tata")
    setCounter(counter + 1)
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }

  }
  return (
    <>
      <h1 className='bg-green-400 text-black pb-4 rounded-xl'>Rahem</h1>
      <h2>Counter Value: {counter}</h2>
      <br />
      <button onClick={addValue} className='pb-5'>Add</button>
      <br />
      <button onClick={removeValue} className='mb-4'>Remove</button>
      <Card userName="Lora" />
      <Card userName="Nora" btnText="Click Me"/>
      

    </>
  )
}

export default App
