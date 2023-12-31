import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import store from './store/store';
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import { AuthLayout } from './components';
import { LandingPage, Login, UploadPage, VideoPage, Dashboard, EditorList, Callback, TermsAndConditions, PrivacyPolicy, RefundPolicy } from './pages';


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries




const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


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
  // {
  //   path: '/dashboard',
  //   element: <App />,
  //   children: [

  //     {
  //       path: '/dashboard',
  //       element: (
  //         <AuthLayout authentication>
  //           {" "}
  //           <Dashboard />
  //         </AuthLayout>
  //       )
  //     },
  //     {
  //       path: '/dashboard/channel/:id',
  //       element: (
  //         <AuthLayout authentication>
  //           {" "}
  //           <Dashboard />
  //         </AuthLayout>
  //       )
  //     },

  //     {
  //       path: '/dashboard/upload',
  //       element: (
  //         <AuthLayout authentication>
  //           {" "}
  //           <UploadPage />
  //         </AuthLayout>
  //       )
  //     },
  //     {
  //       path: '/dashboard/video/:id',
  //       element: (
  //         <AuthLayout authentication>
  //           {" "}
  //           <VideoPage />
  //         </AuthLayout>
  //       )
  //     },
  //     {
  //       path: '/dashboard/channel/:id/editors',
  //       element: (
  //         <AuthLayout authentication>
  //           {" "}
  //           <EditorList />
  //         </AuthLayout>
  //       )
  //     }
  //   ]
  // },
  {
    path: '/Terms-of-Service',
    element: (<TermsAndConditions />)
  },
  {
    path: '/Privacy-Policy',
    element: <PrivacyPolicy />
  },
  {
    path: '/Refund-Policy',
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
