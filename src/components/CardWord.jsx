import { useState } from "react"

const CardWord = ({ word, translation}) => {
  const [flipped, setFlipped] = useState(true)

  const handleClick = () => {
    setFlipped(!flipped)
  }
 
  return ( 
    <div 
      className={`card ${flipped ? 'flipped' : ''}`}
      onClick={handleClick}
    >

      {/* FRONT CARD */}
      <div 
				className="card-front flex justify-center 
				items-center bg-slate-500"> 
				{translation}
      </div>

      {/* BACK CARD */}
      <div className="card-back flex justify-center 
      items-center bg-slate-500"> 
				{word}
      </div>

    </div>  
  )
}

export default CardWord

