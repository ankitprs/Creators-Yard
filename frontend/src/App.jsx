import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { ChannelSidebar, Footer, Navbar } from './components';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'


const queryClient = new QueryClient()


function App() {

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <div className='w-full block h-full bg-[#02040A] text-white'>
          <Navbar />
          <div className="flex  min-h-screen ">
            <ChannelSidebar />
            <div className='w-full'>
              <main className='w-full '>
                <Outlet />
              </main>
              <Footer />
            </div>
          </div>
        </div>
      </QueryClientProvider>
    </div>
  );
}

export default App;
