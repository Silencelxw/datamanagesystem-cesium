import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { AutoComplete, Avatar, Card, Skeleton, Image,} from 'antd';
import Meta from 'antd/lib/card/Meta';



export default class ProjectListBox extends Component{

  
    render(){
        return(
            <div>
                <div className="ProjectListbox">
                <Card
                 hoverable
    style={{
      width: 600,
      top:80,
      left:30,
    }}
    cover={<Link to="/144">
      <img
        alt="example"
        src="https://s3.bmp.ovh/imgs/2023/02/23/86b28abba75d559c.png"
        width="600"
        height="700"
        
      /></Link>
    }
   
  >
    <Meta
      avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
      title= {<Link to ="/144">   144号厂区</Link>}
      description="项目地点：xxx  项目负责人：xxx"
    />
  </Card>
  {/*第二张**/}
  <Card
                 hoverable
    style={{
      width: 600,
      top:-728,
      left:670,
    }}
    cover={<Link to="/185">
      <img
        alt="example"
        src="https://s3.bmp.ovh/imgs/2023/02/23/2c1280e0005c4ec7.png"
        width="600"
        height="700"
        
      /></Link>
    }
   
  >
    <Meta
      avatar={<Avatar src="https://joesch.moe/api/v1/jess" />}
      title= {<Link to ="/185">   185号厂区</Link>}
      description="项目地点：xxx  项目负责人：xxx"
    />
  </Card>
{/**第三张 */}
  {/* <Card
                 hoverable
    style={{
      width: 600,
      top:-1538,
      left:1300,
    //   backgroundImage:'https://s3.bmp.ovh/imgs/2023/02/23/86b28abba75d559c.png'
    }}
    cover={<Link to="/0816">
      <img
        alt="example"
        src="https://s3.bmp.ovh/imgs/2023/02/23/86b28abba75d559c.png"
        width="600"
        height="700"
        
      />
      </Link>
    }
   
  >
    <Meta
      avatar={<Avatar src="https://joesch.moe/api/v1/joe" />}
      title= {<Link to ="/0816">   0816号区域</Link>}
      description="项目地点：xxx  项目负责人：xxx"
    />
  </Card> */}
  
                </div>
               
            </div>

          
        )
    }
    
}