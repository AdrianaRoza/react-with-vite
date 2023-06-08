import { useState } from "react"
import Button from "../components/Button"
import CardWord from "../components/CardWord"
import Form from "../components/Form"

const BodyPart = () => {
  const [showForm, setShowForm] = useState(false)
  const cardData = [
    {
    word:"Head",
    translation:"Cabeça"
    },
    {
      word: "Hand",
      translation: "Mão"
    }
  ]
  
  const vindaDoPai = () => {
    setShowForm(true)
  }

  return (
    <div className="flex flex-wrap justify-center p-2 gap-2">

      <Button handleClick={vindaDoPai} />

      <div className={`${showForm ? 'block' : 'hidden'} justify-center`}>
        <Form setShowForm={setShowForm}/>
      </div>
      

      {
        cardData.map((w, i) => (
        <CardWord
          key={i}
          word={w.word}
          translation={w.translation}
        />
        ))
      }

    </div>
  )
}

export default BodyPart
