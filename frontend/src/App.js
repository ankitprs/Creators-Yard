import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { ChannelSidebar, Footer, Navbar } from './components';


function App() {
  return (
    <div className='w-full block'>
      <Navbar />
      <div className="flex h-screen bg-gray-700">
        <ChannelSidebar />
        <main className='w-full'>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>

  );
}

export default App;
