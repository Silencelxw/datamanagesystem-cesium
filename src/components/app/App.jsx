import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import '../../css/app.css'
import Model144 from '../model/model144'
import Home from '../model/Home'

export default class App extends Component{
  render(){
    return (
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="144" element={<Model144 />} />
      </Routes>
    )
  }
}