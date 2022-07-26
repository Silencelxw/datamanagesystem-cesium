import React, { Component } from 'react'
import '../../css/app.css'
import GetInformation from '../model/GetInf'
import Map from '../model/Model'

export default class App extends Component{
  render(){
    return (
          <div>
            <div class="button_drawer">
              <GetInformation></GetInformation>
            </div>
            <div class="viewer">
              <Map></Map>
            </div>
          </div>
        )
  }
}