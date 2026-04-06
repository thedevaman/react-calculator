import React, { useState } from 'react'
import "animate.css"
import { ToastContainer,toast } from 'react-toastify'

function App() {

  const [expression,setExpression] = useState('')
  const [result, setResult] = useState(0)

  const buttons = [
    ["7", "8", "9", "*"],
    ["4", "5", "6", "/"],
    ["1", "2", "3", "-"],
    ["0", ".", "=", "+"],
   
  ]

  const calculate = (input)=>{
    if(input === "=")
    {
      try{     
      const result = eval(expression)
      setResult(result.toFixed(2))
      return;
      }
      catch(err){
      toast.error('Invalid Expression')
      }
    }
 setExpression((prev)=> prev+input)
  }

  const reset = () =>{
    setResult(0);
    setExpression('')
  }

  return (
    <div className='bg-amber-200 flex items-center justify-center h-screen'> 
      <div className='space-y-6 bg-white rounded-2xl p-8 shadow-4xl w-lg animate__animated animate__slideInUp border border-gray-300'>
       <div className='flex justify-between items-center'>
        <h1 className='text-xl font-medium'>Calculater</h1>
        <h1 className='text-4xl font-bold'>={result}</h1>
       </div>
        <input
        className='border p-3 w-full border-gray-300 rounded-lg text-right'
        placeholder='0'
        value={expression}
        onChange={(e)=>setExpression(e.target.value.trim())}
        />
        <div className='space-y-4'>
          {
            buttons.map((arr,arrIndex)=>(
              <div key={arrIndex} className='grid grid-cols-4 gap-4'>
                {
                  arr.map((item,index)=>{
                   return <button onClick={()=>calculate(item)} className='p-8 rounded-lg bg-blue-500 text-white text-xl font-bold hover:bg-blue-600 active:scale-80 transition duration-300 hover:scale-110' key={index}>{item}</button>
                  })
                }
              </div>
            ))
          }
          <buttton onClick={reset} className="bg-rose-500 text-white font-medium w-full p-3 rounded-lg hover:scale-110 cursor-pointer active:scale-80 transition duration-300">Reset</buttton>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default App
