import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoIcon from "../../assets/creactors_yard.png"
import { uiSidebarAtom } from '../../store/atoms/uiAtom';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { userAtom } from '../../store/atoms/authAtom';
import authService from '../../gcp/auth';


const Navbar = () => {
  const [user, setUser] = useRecoilState(userAtom);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const uiSidebarState = useSetRecoilState(uiSidebarAtom)
  const navigator = useNavigate()

  // Close dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };


  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [])

  function onClickMyPlan() {
    window.open("https://billing.stripe.com/p/login/test_8wM3g4bir39P6vS4gg")
  }
  function onClickLogout() {
    authService.logout()
    setUser(null);
  }

  return (
    <nav className=" text-white h-[54px] border-[#30363C] border-b-[1px] px-[20px]">
      <div className="flex justify-between items-center h-full">
        <div className='flex'>
          <button
            type="button"
            className="inline-flex mx-[10px] items-center rounded-lg "
            onClick={() => { uiSidebarState(e => !e) }}
          >
            {/* <img src='.//creactor_yard_icon.png' alt='icon' /> */}
            <svg
              className="w-[16px] h-[16pxs]"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              />
            </svg>
          </button>
          <h1 className="text-[16px] font-semibold" onClick={() => navigator('/dashboard')}>Creator Yard</h1>
        </div>

        <div className="relative" ref={dropdownRef}>
          <button className='flex' onClick={() => setIsOpen(!isOpen)}>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
            >
              <img src={user?.icon_url} alt="Profile" className="w-8 h-8 rounded-full" />

            </div>
          </button>

          {isOpen && (
            <div className="absolute top-full mt-2 w-40 bg-gray-700 border border-gray-600 rounded-lg shadow-lg">
              <button
                className="flex items-center justify-start w-full text-left px-4 py-2 hover:bg-gray-600 rounded-t-lg"
                onClick={() => {
                  // Handle logout logic here
                  onClickMyPlan()
                  setIsOpen(false);
                }}
              >
                <img
                  src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><circle cx='12' cy='7' r='4'></circle><path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path></svg>"
                  alt="My Plan Icon"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <i className="fas fa-sign-out-alt mr-2 text-white"></i>
                <span className="text-white">My Plan</span>
              </button>
              <button
                className="flex items-center justify-start w-full text-left px-4 py-2 hover:bg-gray-600 rounded-b-lg"
                onClick={() => {
                  // Handle "my plan" logic here
                  onClickLogout()
                  setIsOpen(false);
                }}
              >
                <img
                  src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M16 17l5-5-5-5M21 12H9'></path><path d='M3 3h6a2 2 0 012 2v12a2 2 0 01-2 2H3z'></path></svg>"
                  alt="Logout Icon"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <i className="fas fa-tasks mr-2 text-white"></i>
                <span className="text-white">Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav >
  );
};

export default Navbar;
