
const Button = ({handleClick}) => {
    return (
    <div className="flex flex-col items-center h-screen justify-center">
      <button 
        className="bg-rose-500 hover:bg-rose-300 
        text-white font-bold py-5 px-10 rounded-full"
        onClick={handleClick}
      >
        Botão
      </button>
    </div>
    )
  }
  export default Button