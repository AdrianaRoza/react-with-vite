import React, { useState } from "react"

const Month = () => {
  const [monthsOfTheyear, setMonthsOfTheyear] = useState([
    {
      id:1,
      week_pt:'Janeiro',
      translation:'January',
    },
    {
      id:2,
      week_pt:'Fevereiro',
      translation:'February',
    },
    {
      id:3,
      week_pt:'Março',
      translation:'March',
    },
    {
      id:4,
      week_pt:'Abril',
      translation:'April',
    },
    {
      id:5,
      week_pt:'Maio',
      translation:'May',
    },
    {
      id:6,
      week_pt:'Junho',
      translation:'June',
    },
    {
      id:7,
      week_pt:'Julho',
      translation:'July',
    },
    {
      id:8,
      week_pt:'Agosto',
      translation:'August',
    },
    {
      id:9,
      week_pt:'Setembro',
      translation:'September',
    },
    {
      id:10,
      week_pt:'Outubro',
      translation:'October',
    },
    {
      id:11,
      week_pt:'Novembro',
      translation:'November',
    },
    {
      id:12,
      week_pt:'Dezembro',
      translation:'December',
    },
  ])

  const [editingTranslationId, setEditingTranslationId] = useState(null)
  
  const handleClick = (translationId) => {
    setEditingTranslationId(translationId)
  }

  const handleChange = (event, translationId) => {
    const updatedMonthsOfTheyear = monthsOfTheyear.map((translation) => {
      if (translation.id === translationId) {
        return { ...translation, week_pt: event.target.value }
      }
      return translation
    })
    setMonthsOfTheyear(updatedMonthsOfTheyear)
  }

  const getTranslatedWeek = (translationId) => {
    const translation = monthsOfTheyear.find(
      (translation) => translation.id === translationId
    )
    return translation ? translation.week_pt : ""
  }
    
  return (
    <ul className="flex flex-col items-center mt-3 text-white">
      {monthsOfTheyear.map((translation) => (
        <li
          key={translation.id}
          className="flex justify-center py-3 bg-rose-500 w-1/5 m-1 rounded-xl font-bold"
        >
          <span
            onClick={() => handleClick(translation.id)}
            className={editingTranslationId === translation.id ? "hidden" : ""}
          >
            {translation.translation}
          </span>
          <span
            className={editingTranslationId === translation.id ? "" : "hidden"}
          >
            {getTranslatedWeek(translation.id)}
          </span>
          </li>
        ))
      }
    </ul>
  )
}

export default Month