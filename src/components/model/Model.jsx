import React, {Component} from 'react'


const cesium = require('cesium/Cesium')
//windows.Cesium = cesium;
let Cesium = cesium;
//eslint-disable-next-line no-undef
Cesium.Ion.defaultAccessToken = 'you_key'

export default class Map extends Component{

    componentDidMount(){
        

        //eslint-disable-next-line no-undef
        var viewer = new Cesium.Viewer('cesiumContainer');
        //eslint-disable-next-line no-undef
        var tileset = new Cesium.Cesium3DTileset({
          url: 
          '../../3dtile/ankeyuan/tileset.json'
        });
        viewer.scene.primitives.add(tileset);
        viewer.zoomTo(tileset);
    
        // 亮度设置
        var stages = viewer.scene.postProcessStages;
        //eslint-disable-next-line no-undef
        viewer.scene.brightness =  viewer.scene.brightness || stages.add(Cesium.PostProcessStageLibrary.createBrightnessStage());
        viewer.scene.brightness.enabled = true;
        viewer.scene.brightness.uniforms.brightness = Number(1.5);
    
    }

    render(){
        return (
            <div id="cesiumContainer">
            </div>
          )
    }
}