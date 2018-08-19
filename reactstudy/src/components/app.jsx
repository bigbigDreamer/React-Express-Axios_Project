import React,{Component} from 'react'
import  Left from './left'
import Right from './right'
export default class App extends Component{
    state = {
        Fmsg:''
    }
    updateMsg =(newMsg)=>{
        let {Fmsg} = this.state;
        Fmsg = newMsg
        this.setState({Fmsg})
    }
    render () {
      return (
        <div>
            <h1>React小练习</h1>
            <Left data={this.state.Fmsg} updateMsg={this.updateMsg}/>
            <Right data={this.state.Fmsg}/>
        </div>
      )
    }
}