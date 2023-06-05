import { useState } from "react"

const Card = ({ word, opposite, img, imgOpposite}) => {
  const [flipped, setFlipped] = useState(true)

  const handleClick = () => {
    setFlipped(!flipped)
  }
 
  return ( 
    <div 
      className={`card ${flipped ? 'flipped' : ''}`}
      onClick={handleClick}
    >

      {/* FRONTE CARD */}

      <div className="card-front flex flex-col justify-end bg-slate-500">
        <div className="rounded-t-[15px] w-full h-full">
          <img 
            src={imgOpposite} 
            alt={opposite} 
            className="h-40 w-full rounded-t-[15px]"  
          />
        </div>

        <div className="bg-orange-500 w-full text-center rounded-b-[15px] py-2 align-bottom">
          {opposite}
        </div> 
      </div>

      {/* BACK CARD */}

      <div className="card-back flex flex-col justify-end bg-slate-500">
        <div className="rounded-t-[15px] w-full h-full">
          <img 
            src={img} 
            alt={word} 
            className="h-40 w-full rounded-t-[15px]"  
          />
        </div>

        <div className="bg-red-400 w-full text-center rounded-b-[15px] py-2 align-bottom">
          {word}
        </div> 
      </div>
    </div>  
  )
}

export default Card
