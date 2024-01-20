import React from 'react'
import LogoIcon from "../../assets/creactors_yard.png"


function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Add your logo or brand icon here */}
          <span className="text-xl font-bold">Creator Yard</span>
          {/* Add additional links or icons as needed */}
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>

        <div className="flex items-center space-x-4">
          {/* Add social media icons or links as needed */}
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer