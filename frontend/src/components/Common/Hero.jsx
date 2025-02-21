import React from "react";
import { NavLink } from "react-router-dom";


const Hero = () => {
  const user = localStorage.getItem('user');

    return (
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 lg:w-2/3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
                Welcome to our <br className="hidden md:block" />
                <span className="text-indigo-500">Awesome</span> Blog Website
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8">
                Beautiful and Functional websites for personal blogs.
              </p>
              <div className="flex gap-2">
                {!user && <NavLink
                  to='signin'
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-md"
                >
                    Login
                </NavLink>}
                <NavLink
                  to='about'
                  className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-md"
                >
                  About us
                </NavLink>
              </div>
            </div>
            <div className="md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFvbZWxCxx2sc1XyF-TFPeDaS9L6fPez_KcA&s"
                alt="Hero"
                className="h-15 w-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;
  