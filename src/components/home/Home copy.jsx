import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {HomeFilled} from '@ant-design/icons';
import { Layout, Space } from 'antd';

export default class Home extends Component{
 
    render(){
        return (
            <div>
                
                <span><Space><HomeFilled/>Home</Space> </span>
                <nav>
                    <Link to="/144">前往144号厂区</Link>
                </nav>
                <nav>
                    <Link to="/185">前往185号厂区</Link>
                </nav>
                <nav>
                    <Link to="/0816">前往0816号区域</Link>
                </nav>
            </div>
          )
    }
}