const Month = () => {
  const  months = ['Janeiro', 'Fevereiro', 'Março',
    'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro',
    'Novenbro', 'Dezembro']
    
  return (
    <ul className="flex flex-col items-center mt-3 text-white">
      {
        months.map((month, i) => (
          <li className="flex justify-center py-3 bg-rose-500 w-1/5 m-1
              rounded-xl font-bold"  
          >
            { month }
          </li>
        ))
      }
    </ul>
  )
}

export default Month