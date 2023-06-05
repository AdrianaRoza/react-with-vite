import CardWord from "../components/CardWord"

const BodyPart = () => {
  const cardData =[
  {
  word:"Head",
  translation:"Cabeça"
  },
  {
    word: "Hand",
    translation: "Mão"
  }
]
  
  return (
    <div className="flex flex-wrap justify-center p-2 gap-2">
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
