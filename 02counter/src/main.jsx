import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, createBrowserRouter } from 'react-router-dom';
import Header from './components/Header.jsx';
import Layout from './Layout.jsx';
import Footer from './components/Footer.jsx';
import Body from './components/Body.jsx';
import { About } from './components/About.jsx';

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout/>,
    children : [
      {
      path : '/footer',
      element : <Footer/>
      },
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Router>
   <RouterProvider router={router} />
   <App/>
  </Router>
  </React.StrictMode>,
)
