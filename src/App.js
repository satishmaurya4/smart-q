import React from 'react'
import "./App.css";
import {Routes, Route} from "react-router-dom"
import Nav from './components/nav/Nav';
import AppBody from './components/appBody/AppBody';

const App = () => {
  return (
      <>
      <Nav />
      <AppBody />
      </>
  )
}

export default App