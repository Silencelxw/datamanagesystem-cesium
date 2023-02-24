import React, { Component } from 'react'
import { Routes, Route  } from 'react-router-dom'
import '../../css/app.css'
import GetModel from '../model/GetModel'
import Home from '../home/Home'

export default class App extends Component {
  render() {
    return (
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/144" element={<GetModel />} />
          <Route path="/185" element={<GetModel />} />
          <Route path="/0816" element={<GetModel />} />
        </Routes>


    )
  }
}