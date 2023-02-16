import React, { Component } from 'react'
import '../../css/app.css'
import { Button,Drawer } from 'antd'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class GetInformation extends Component{

  constructor(props) {
    super(props);
    this.state = {
      Model_Information:[],
      visible: false,
      Loc:String
    }
  }

  componentDidMount() {
    const url = '../../../model_data.json'
    let { Model_Information,Loc } = this.state
    axios.get(url)
        .then((response) => {
            const { data: { data } } = response;
            let PointID = data.map(item => {return item.p_id})
            let PointInformation = data.map(item => {return item.p_information})
            let ModelID = data.map(item => {return item.m_id})
            let ModelInformation = data.map(item => {return item.m_information})
            for (let i = 0; i < PointID.length; i++) {
              // eslint-disable-next-line
                switch (ModelID[i]) {
                    case Loc:
                        Model_Information.push(PointID[i])
                        Model_Information.push(PointInformation[i])
                        Model_Information.push(ModelID[i])
                        Model_Information.push(ModelInformation[i])
                        break;
                }
                
            }
            this.setState({
                Model_Information
            });
        })
        .catch((error) => {
            console.log(error);
        });
        Loc = window.location.hash
        console.log(Loc)
        this.setState({
          Loc
        })
  }


  showDrawer = () => { 
    let { visible }= this.state
    visible = true
    this.setState({
      visible
    });
  };
  
  onClose = () => {
    let { visible }= this.state
    visible = false
    this.setState({
      visible
    });
  };

  render(){
      // 这里的className不生效
    let { visible, Model_Information }= this.state
      return(
        <div class="button_drawer">
          <Button id="b"  onClick={this.showDrawer}>
            信息
          </Button>
          <Drawer id="d" title={Model_Information[0]} placement="right" onClose={this.onClose} visible={visible}>
            <p>点位信息</p>
            <p>&emsp;&emsp;{Model_Information[1]}</p>
            <p>模型编号</p>
            <p>&emsp;&emsp;{Model_Information[2]}</p>
            <p>模型信息</p>
            <p>&emsp;&emsp;{Model_Information[3]}</p>
            <p><Link to="/">返回首页</Link></p>
          </Drawer>
        </div>
      )
  }

}