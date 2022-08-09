import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component{

    render(){
        return (
            <div>
                <span>Home界面</span>
                <nav>
                    <Link to="/144">前往144号厂区</Link>
                </nav>
                <nav>
                    <Link to="/185">前往185号厂区</Link>
                </nav>
            </div>
          )
    }
}