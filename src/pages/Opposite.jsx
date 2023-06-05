import React from "react"
import Card from "../components/Card"

import First from '../assets/memoryImages/night.jpeg'
import Second from '../assets/memoryImages/sleep.jpeg'
import oppFirst from '../assets/memoryImages/sad.jpeg'
import oppSecond from '../assets/memoryImages/toy.jpeg'
import imgBanana from '../assets/memoryImages/banana.jpeg'
import imgAvocado from '../assets/memoryImages/avocado.jpeg'

const Opposite = () => {
  const words = [
    {
      word: 'Night',
      opposite: 'Sad',
      img: First,
      imgOpposite: oppFirst
    },
    {
      word: 'Sleep',
      opposite: 'Toy',
      img: Second,
      imgOpposite: oppSecond
    },
    {
      word: 'Banana',
      opposite: 'Avocado',
      img: imgBanana,
      imgOpposite: imgAvocado
    },
    {
      word: 'Night',
      opposite: 'Sad',
      img: First,
      imgOpposite: oppFirst
    },
    {
      word: 'Sleep',
      opposite: 'Toy',
      img: Second,
      imgOpposite: oppSecond
    },
    {
      word: 'Banana',
      opposite: 'Avocado',
      img: imgBanana,
      imgOpposite: imgAvocado
    },
  ]
  
  return (
    <div className="flex flex-wrap gap-2 p-2">
      {
        words.map((w, i) => (
          <Card 
            key={i} 
            word={w.word} 
            opposite={w.opposite} 
            img={w.img} 
            imgOpposite={w.imgOpposite} 
          />
        ))
      }
    </div>
  )
}

export default Opposite
