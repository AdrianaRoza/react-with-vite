
const Weeks = () => {
    const dayOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira',
      'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado']
      
    return (
      <ul className="flex flex-col items-center mt-3 text-white">
        {
          dayOfWeek.map((day, i) => (
            <li className="flex justify-center py-3 bg-rose-500 w-1/5 m-1
                rounded-xl font-bold"  
            >
              { day }
            </li>
          ))
        }
      </ul>
    )
  }
  
  export default Weeks