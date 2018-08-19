import React,{Component} from 'react'
import  PropTypes  from 'prop-types'
import  {NavLink,Switch,Route,Redirect}  from 'react-router-dom'
import About from "../views/about";
import Home from "../views/home";
import axios  from 'axios'
export default class Left extends Component{
   static propTypes = {
       data: PropTypes.string.isRequired,
       updateMsg: PropTypes.func.isRequired
   }
    state = {
        msg:''
    }
    handleChange = (event)=>{
        this.setState({
            msg:event.target.value
        });
    }
    handleClick = (event)=>{
       let {msg} = this.state;
        this.props.updateMsg(msg)
    }
    handleSub = (event)=>{
       alert('ajax请求开始')
     axios.get('/test')
           .then((res)=>{
               console.log(res)
           })
           .catch((err)=>{
               console.log(err.response)
           })
       /* fetch('/test',{
            name:this.state.msg
        }).then((response)=> {
            return response.json()
        }).then(function(data) {
            console.log(data)
        }).catch(function(e) {
            console.log(e)
        });*/
       event.preventDefault();
    }
    render () {
      return (
        <div>
            <form onSubmit={this.handleSub}>
            <input type="text" value={this.state.msg} onChange={this.handleChange} name='name'/><br/>
            <span>{this.state.msg}</span><br/>
            <button onClick={this.handleClick}>传递</button>
                <input type="submit" value='提交' />
            </form>
            <NavLink to='/about'>
                About
            </NavLink>
            <NavLink to='/home'>
                Home
            </NavLink>
            <Switch>
                <Route path='/about' component={About}/>
                <Route path='/home' component={Home}/>
                <Redirect  to='/home'/>
            </Switch>
        </div>
      )
    }
}