import { Outlet, Link } from "react-router-dom" 

const Layout = () => {
  return (
    <>
      <nav className="bg-rose-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0"> 
                {/* <span className="text-white">Logo</span> */}
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4"> 

                <Link to="/"
                    className="px-3 py-2 rounded-md text-sm font-medium
                    text-gray-300 hover:bg-rose-300 hover:text-white">
                      Home
                  </Link>

                  <Link to="/day_of_week"
                    className="text-gray-300 hover:bg-rose-300 hover:text-white 
                    px-3 py-2 rounded-md text-sm font-medium">
                      Weeks
                  </Link>

                  <Link to="/month"
                    className="text-gray-300 hover:bg-rose-300 hover:text-white 
                    px-3 py-2 rounded-md text-sm font-medium">
                      Months
                  </Link>  

                  <Link to="/login"
                    className="text-gray-300 hover:bg-rose-300 hover:text-white 
                    px-3 py-2 rounded-md text-sm font-medium">
                      Login
                  </Link>

                  <Link to="/opposite"
                    className="text-gray-300 hover:bg-rose-300 hover:text-white 
                    px-3 py-2 rounded-md text-sm font-medium">
                      Opposite
                  </Link>

                  <Link to="/form"
                    className="text-gray-300 hover:bg-rose-300 hover:text-white 
                    px-3 py-2 rounded-md text-sm font-medium">
                      Form
                  </Link>

                  <Link to="/NewForm"
                    className="text-gray-300 hover:bg-rose-300 hover:text-white 
                    px-3 py-2 rounded-md text-sm font-medium">
                      NewForm
                  </Link>
                  
                  <Link to='/NewCard'
                    className="text-gray-300 hover:bg-rose-300 hover:text-white 
                    px-3 py-2 rounded-md text-sm font-medium">
                      NewCard
                  </Link>     
                            
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav> 

      {/* BODY OF APP */}
      <Outlet />
    </>
  )
}

export default Layout
