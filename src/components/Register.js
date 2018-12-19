import React,{Component} from 'react'
import {fetch as fetchPolyfill} from 'whatwg-fetch'
import fetchJsonp from 'fetch-jsonp'
import {NavLink,HashRouter,BrowserRouter,Redirect,Route,Link,Switch} from 'react-router-dom'
import '../static/css/register.css'
export default class Register extends Component{
	constructor(props) {
	    super(props)
		this.state={
			username:'',
			pwd:'',
			newpwd:''
		}
		this.register=this.register.bind(this)
		this.username=this.username.bind(this)
		this.pwd=this.pwd.bind(this)
		this.newpwd=this.newpwd.bind(this)
	}
	render(){
		let {username,pwd,newpwd} = this.state
		return(
			<div>
				<div className="mian">
					<div className="mianhead">
						<Link to="/index/mine"><i className="fa fa-angle-left"></i></Link>
						<p>用户注册</p>
					</div>
					<div className="miancon">
						<p><input type='text' value={username} onChange={this.username} placeholder="用户名/邮箱/手机号"/></p>
						<p><input type='text' value={pwd} onChange={this.pwd} placeholder="密码"/><span className="fa fa-keyboard-o" id="keyb"></span></p>
						<p><input type='text' value={newpwd} onChange={this.newpwd} placeholder="确认密码"/></p>
						<p><button onClick={this.register}>注册</button></p>
					</div>
				</div>
			</div>
		)
	}
	register(){
		/* console.log(this.state.username)
		localStorage.setItem("username",this.state.username)
		alert("注册成功")
		this.props.history.push('/index/mine') */
	}
	username(e){
		this.setState({
			username:e.target.value
		})
	}
	pwd(e){
		this.setState({
			pwd:e.target.value
		})
	}
	newpwd(e){
		this.setState({
			newpwd:e.target.value
		})
	}
}