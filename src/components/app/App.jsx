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
    //eslint-disable-next-line no-undef
    var viewer = new Cesium.Viewer('cesiumContainer');
    //eslint-disable-next-line no-undef
    var tileset = new Cesium.Cesium3DTileset({
      url: //'E:/datamanagesystem-cesium/public/3dtile/ankeyuan/tileset.json'
      //'https://earthsdk.com/v/last/Apps/assets/dayanta/tileset.json'
      //'E:/datamanagesystem-cesium/public/3dtile/ankeyuan/tileset.json'
      //'../public/3dtile/ankeyuan/tileset.json'
      '../../3dtile/ankeyuan/tileset.json'
    });
    viewer.scene.primitives.add(tileset);
    viewer.zoomTo(tileset);
  }
  return (
    <div id="cesiumContainer">
    </div>
  )
}

export default HelloMap;