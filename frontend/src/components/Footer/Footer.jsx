import React from 'react'
import LogoIcon from "../../assets/creactors_yard.png"


function Footer() {
  return (
    <footer className=" border-[#30363C] border-t-[1px]  py-[18px]">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">

          <a href="/" className="hover:text-gray-400 font-semibold">@ 2024 Creator Yard </a>
          <a href="/terms-of-service" className="hover:text-gray-400">Terms</a>
          <a href="/privacy-policy" className="hover:text-gray-400">Privacy</a>
          <a href="/refund-policy" className="hover:text-gray-400">Refund</a>
          <a href="https://forms.gle/icUcy2eTuZaBtuYy5" className="hover:text-gray-400">Contact</a>
        </div>

      </div>
    </footer>
  )
}

export default Footer