import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' 
     style={{backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1600)` }}>
       <h1>Currency Converter App</h1>
     </div> 
  )
}

export default App
