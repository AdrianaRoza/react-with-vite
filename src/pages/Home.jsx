import { Link } from "react-router-dom"
import Card from "../components/Card"

const Home = () => {

  return (
    <div>
      <h1>Home</h1>
      
      <Link to='/bodypart'className="bg-black text-white p-2 rounded-full">
        qualquer coisa
      </Link> 
    </div>
  )
}

export default Home