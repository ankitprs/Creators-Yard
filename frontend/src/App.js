import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { ChannelSidebar, Footer, Navbar } from './components';
import { useEffect, useState } from 'react';
import apiService from './gcp/data';
import authService from './gcp/auth'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from './store/authSlice';


function App() {
  const [channels, setChannels] = useState([])
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.userData)

  async function fetchUser() {
    const userData = await authService.getCurrentUser()
    if (userData) {
      dispatch(login({ userData: userData }))
      getListOfChannels()
    } else {
      dispatch(logout())
    }
  }

  function getListOfChannels() {
    apiService.getChannels().then((chanls) => {
      console.log(chanls);
      if (chanls) setChannels(chanls)
    })
  }

  useEffect(() => {
    getListOfChannels()
    // fetchUser()
  }, [])

  function oauthUrl() {
    apiService.getOauth2Url().then(url =>
      window.location.href = url
    ).catch(err => {
      console.log(err);
    })
  }

  return (
    <div className='w-full block'>
      <Navbar />
      <div className="flex h-screen bg-gray-700">
        <ChannelSidebar channels={channels} onAuthClick={oauthUrl} />
        <main className='w-full'>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>

  );
}

export default App;
