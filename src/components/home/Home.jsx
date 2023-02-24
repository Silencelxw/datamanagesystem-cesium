import React, {Component} from 'react'
import HomeTitle from './HomeTitle'
import ProjectListBox from "./ProjectListBox"

export default class Home extends Component{
 
    render(){
        return (
            <div>
                  <div className="Home">
                          <HomeTitle></HomeTitle>
                    <ProjectListBox></ProjectListBox>
                </div>
            </div>
          )
    }
}