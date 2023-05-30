import React from 'react';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className="bg-rose-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* Coloque o logotipo da sua navbar aqui */}
              <span className="text-white">Logo</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {/* Coloque os links da navbar aqui */}
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Link 1</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Link 2</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Link 3</a>
                <Button/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar


