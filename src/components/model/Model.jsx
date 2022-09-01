import { modelMatrix } from 'cesium';
import React, { Component } from 'react'

const cesium = require('cesium/Cesium')
//windows.Cesium = cesium;
let Cesium = cesium;


export default class Map extends Component {

  componentDidMount() {

    //let ModelUrl = ""
    let s1 = "../../3dtile/ankeyuan"
    let s2 = "/tileset.json"

    let ModelUrl = s1 + window.location.href.substring(window.location.href.lastIndexOf("/")) + s2
    //console.log("ModelUrl")
    //window.location.pathname
    //eslint-disable-next-line no-undef
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwYmI4Y2EzNC0xYTU5LTQxNzEtYjdmYy0yNjZjYTE5M2UxMjkiLCJpZCI6MTAyODI4LCJpYXQiOjE2NTg5ODU3MzR9.IKgGVJOU8w9FA9typ403QREHQ8fbgNh4lvgO3dBKfPk'
    //eslint-disable-next-line no-undef
    var viewer = new Cesium.Viewer('cesiumContainer', {
      animation: false, // 是否创建动画小部件  
      timeline: false, // 是否显示时间线控件  
      fullscreenButton: false, // 右下角全屏按钮  
      geocoder: false, // 是否显示地名查找控件  
      baseLayerPicker: true, // 是否显示图层选择控件 
    });
    //eslint-disable-next-line no-undef
    var tileset = new Cesium.Cesium3DTileset({
      url: ModelUrl,
      backFaceCulling: false
      //'../../3dtile/ankeyuan/144/tileset.json'
    });
    viewer.scene.primitives.add(tileset);
    viewer.zoomTo(tileset);

    // 亮度设置
    var stages = viewer.scene.postProcessStages;
    //eslint-disable-next-line no-undef
    viewer.scene.brightness = viewer.scene.brightness || stages.add(Cesium.PostProcessStageLibrary.createBrightnessStage());
    viewer.scene.brightness.enabled = true;
    viewer.scene.brightness.uniforms.brightness = Number(1.5);

  }

  render() {
    return (
      <div id="cesiumContainer">
      </div>
    )
  }
}