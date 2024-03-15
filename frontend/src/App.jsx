import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { ChannelSidebar, Footer, Navbar } from './components';
import { useEffect, useState } from 'react';
import apiService from './gcp/data';
import authService from './gcp/auth'


function App() {
  const [channels, setChannels] = useState([])

  async function fetchUser() {
    const userData = await authService.getCurrentUser()
    if (userData) {
      // dispatch(login({ userData: userData }))
      apiService.authToken = userData.token;
      getListOfChannels()
    } else {
      // dispatch(logout())
    }
  }

  function getListOfChannels() {
    apiService.getChannels().then((chanls) => {
      console.log(chanls);
      if (chanls) setChannels(chanls)
    })
  }

  useEffect(() => {
    // getListOfChannels()
    fetchUser()
  }, [])

  function oauthUrl() {
    apiService.getOauth2Url().then(url =>
      window.location.href = url
    ).catch(err => {
      console.log(err);
    })
  }

  return (
    <div className='w-full block h-full'>
      <Navbar />
      <div className="flex  min-h-screen bg-gray-700">
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
