import React, { Component } from 'react'

const cesium = require('cesium/Cesium')
//windows.Cesium = cesium;
let Cesium = cesium;


export default class Map extends Component {

  componentDidMount() {
    //模型路径
    let s1 = "../../3dtile/ankeyuan"
    let s2 = "/tileset.json"
    let ModelUrl = s1 + window.location.href.substring(window.location.href.lastIndexOf("/")) + s2

    //UI设置
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

    //模型加载
    //eslint-disable-next-line no-undef
    var tileset = new Cesium.Cesium3DTileset({
      url: ModelUrl,
      backFaceCulling: false
      //'../../3dtile/ankeyuan/144/tileset.json'
    });


    //模型调整
    const tx = 0;
    const ty = 0;
    const tz = -982;
    // const rx = 0;
    // const ry = 0;
    // const rz = 0;
    // const scale = 1;
    tileset.readyPromise.then(function (argument) {
      viewer.scene.primitives.add(tileset);
      const cartographic = Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center);
      const surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height);
      const m = Cesium.Transforms.eastNorthUpToFixedFrame(surface);

      //平移
      const _tx = tx ? tx : 0;
      const _ty = ty ? ty : 0;
      const _tz = tz ? tz : 0;
      const tempTranslation = new Cesium.Cartesian3(_tx, _ty, _tz);
      const offset = Cesium.Matrix4.multiplyByPoint(m, tempTranslation, new Cesium.Cartesian3(0, 0, 0));
      const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3());
      tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation);

      tileset._root.transform = m;


      // //旋转及缩放
      // if (rx) {
      //   const mx = Cesium.Matrix3.fromRotationX(Cesium.Math.toRadians(rx));
      //   const rotate = Cesium.Matrix4.fromRotationTranslation(mx);
      //   Cesium.Matrix4.multiply(m, rotate, m);
      // }

      // if (ry) {
      //   const my = Cesium.Matrix3.fromRotationY(Cesium.Math.toRadians(ry));
      //   const rotate = Cesium.Matrix4.fromRotationTranslation(my);
      //   Cesium.Matrix4.multiply(m, rotate, m);
      // }

      // if (rz) {
      //   const mz = Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(rz));
      //   const rotate = Cesium.Matrix4.fromRotationTranslation(mz);
      //   Cesium.Matrix4.multiply(m, rotate, m);
      // }

      // if (scale) {
      //   const _scale = Cesium.Matrix4.fromUniformScale(scale);
      //   Cesium.Matrix4.multiply(m, _scale, m);
      // }

      // tileSet._root.transform = m;


      //viewer.flyTo(tileset);
      viewer.zoomTo(tileset);
    });

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
