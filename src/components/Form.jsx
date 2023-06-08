import React, { useState } from 'react'


const Form = ({ setShowForm }) => {
  const [name, setName] = useState("")
  const [traducao, setTraducao] = useState("")
  

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowForm(false)
  }
  
  return (
    
      <form 
        className='flex flex-col items-center rounded-md bg-rose-400 m-2 p-3' 
        onSubmit={handleSubmit}
      >
        <label
          className='flex flex-col text-center text-white'
        >
          Nome
          <input 
            className='mb-2 rounded-md text-red-500'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}  
          />
        </label>

        <label
          className='flex flex-col text-center text-white'
        >
          Tradução
          <input 
            className='mb-2 rounded-md text-red-500'
            type='text'
            value={traducao}
            onChange={(e) => setTraducao(e.target.value)}  
          />
        </label>
        <input type="submit" 
          className='hover:bg-rose-300 bg-rose-500 rounded-md 
          hover:text-white text-white px-4 hover:cursor-pointer px-20 py-2' 
        />
      </form>
   
   )
}

export default Form