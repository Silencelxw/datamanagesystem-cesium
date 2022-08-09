import React, { Component } from 'react'
import GetInformation from './GetInf'
import Map from './Model'

export default class GetModel extends Component{
  render(){
    return (
          <div>
              <GetInformation></GetInformation>
              <Map></Map>
          </div>
        )
  }
}