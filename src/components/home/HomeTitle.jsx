import React, {Component} from 'react'
import {HomeFilled} from '@ant-design/icons';
import { Layout, Space } from 'antd';

export default class HomeTitle extends Component{

    render(){
        return(
            <div>
                <div className="HomeTitle">
                    <span><Space> 项  &emsp;&emsp;目 &emsp; &emsp;数 &emsp; &emsp;据 </Space></span>
                </div>
            </div>
        )
    }

}