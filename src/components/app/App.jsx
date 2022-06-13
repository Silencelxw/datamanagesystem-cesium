import React, { useEffect } from 'react'
import '../../css/app.css'

const cesium = require('cesium/Cesium')
window.Cesium = cesium;
// eslint-disable-next-line no-undef
Cesium.Ion.defaultAccessToken = 'you_key';
const HelloMap = () => {
  useEffect(() => {
    initMap()
  }, [])
  const initMap =  () => {
    // eslint-disable-next-line no-undef
    new Cesium.Viewer('mapCon')
  }
  return (
    <div id="mapCon">
      
    </div>
  )
}
console.log(HelloMap);
export default HelloMap;