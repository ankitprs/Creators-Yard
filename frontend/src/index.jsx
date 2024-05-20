import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Toaster } from "@/components/ui/toaster"
import { RecoilRoot } from 'recoil'

// backend and firebase setup
import './conf/conf'

import './index.css';
import App from './App';
import { AuthLayout } from './components';
import { LandingPage, Login, UploadPage, VideoPage, Dashboard, EditorList, Callback, TermsAndConditions, PrivacyPolicy, RefundPolicy, CustomerSupport, FirstPage } from './pages';
import Project from './pages/Project';



const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    children: []
  },
  {
    path: '/callback',
    element: <Callback />,
    children: []
  },
  {
    path: '/login',
    element: (
      <AuthLayout authentication={false}>
        <Login />
      </AuthLayout>
    )
  },
  {
    path: '/dashboard',
    element: <App />,
    children: [

      {
        path: '/dashboard',
        element: (
          <AuthLayout authentication={true}>
            {" "}
            <FirstPage />
          </AuthLayout>
        )
      },
      {
        path: '/dashboard/channel/:channel_id',
        element: (
          <AuthLayout authentication={true}>
            {" "}
            <Dashboard />
          </AuthLayout>
        )
      },

      {
        path: '/dashboard/:channel_id/upload',
        element: (
          <AuthLayout authentication={true}>
            {" "}
            <UploadPage />
          </AuthLayout>
        )
      },
      {
        path: '/dashboard/channel/:channel_id/video/:video_id',
        element: (
          <AuthLayout authentication={true}>
            {" "}
            <VideoPage />
          </AuthLayout>
        )
      },
      {
        path: '/dashboard/channel/:channel_id/editors',
        element: (
          <AuthLayout authentication={true}>
            {" "}
            <EditorList />
          </AuthLayout>
        )
      },
      {
        path: "/dashboard/channel/:channel_id/project/:project_id",
        element: (
          <AuthLayout authentication={true}>
            {" "}
            <Project />
          </AuthLayout>
        )
      }
    ]
  },
  {
    path: '/terms-of-service',
    element: (<TermsAndConditions />)
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />
  },
  {
    path: '/refund-policy',
    element: <RefundPolicy />
  },
  {
    path: '*',
    element: <div>404 Not Found</div>
  }
])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
        <Suspense fallback={<div>Loding...</div>}>
          <RouterProvider router={router} />
        </Suspense>
        <Toaster />
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
