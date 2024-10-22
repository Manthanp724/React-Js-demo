import React from 'react'
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet } from 'react-router-dom';
import  About  from './components/About';
import  Contact  from './components/Contact';

const Layout = () => {
  return (
    <div>
      <>
      <Header />
      <Body />
      <About/>
      <Contact/>
      <Outlet />
      <Footer />
      </>
    </div>
  )
}

export default Layout
