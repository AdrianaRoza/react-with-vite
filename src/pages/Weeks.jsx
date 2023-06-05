import React, { useState } from "react"

const Weeks = () => {
  const [dayOfWeek, setDayOfWeek] = useState([
    {
      id: 1,
      day_pt: "Domingo",
      translation: "Sunday",
    },
    {
      id: 2,
      day_pt: "Segunda-feira",
      translation: "Monday",
    },
    {
      id: 3,
      day_pt: "Terça-feira",
      translation: "Tuesday",
    },
    {
      id: 4,
      day_pt: "Quarta-feira",
      translation: "Wednesday",
    },
    {
      id: 5,
      day_pt: "Quinta-feira",
      translation: "Thursday",
    },
    {
      id: 6,
      day_pt: "Sexta-feira",
      translation: "Friday",
    },
    {
      id: 7,
      day_pt: "Sábado",
      translation: "Saturday",
    },
  ])

  const [editingTranslationId, setEditingTranslationId] = useState(null)

  const handleClick = (translationId) => {
    setEditingTranslationId(translationId)
  }

  const handleChange = (event, translationId) => {
    const updatedDayOfWeek = dayOfWeek.map((translation) => {
      if (translation.id === translationId) {
        return { ...translation, day_pt: event.target.value }
      }
      return translation
    })
    setDayOfWeek(updatedDayOfWeek)
  }

  const getTranslatedDay = (translationId) => {
    const translation = dayOfWeek.find(
      (translation) => translation.id === translationId
    )
    return translation ? translation.day_pt : ""
  }

  return (
    <ul className="flex flex-col items-center mt-3 text-white">
      {dayOfWeek.map((translation) => (
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
            {getTranslatedDay(translation.id)}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Weeks;
