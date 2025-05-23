import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App';
import Profile from './components/Profile';
import ErrorPage from './components/ErrorPage';
import Contact from './components/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
 {
  path:"/",
  element:<App/>,
  errorElement: <ErrorPage/>,
  children:[
    {
      path:"contact",
      element: <Contact/>
    }
  ]
 },
 {
  path:"/profile",
  element:<Profile/>
 }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
