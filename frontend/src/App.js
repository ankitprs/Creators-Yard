import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { ChannelSidebar, Footer, Navbar } from './components';
import { useEffect, useState } from 'react';
import apiService from './gcp/data';


function App() {
  const [channels, setChannels] = useState([])

  useEffect(() => {
    apiService.getChannels("ankitprasad.119@gmail.com").then((chanls) => {
      console.log(chanls);
      if (chanls) setChannels(chanls)
    })
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
