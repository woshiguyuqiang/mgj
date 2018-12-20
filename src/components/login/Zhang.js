import React,{Component} from 'react'
import '../../static/css/mian.css'
import '../../static/css/zhang.css'
import {Link} from "react-router-dom"
export default class Zhang extends Component{
	constructor(props) {
		super(props)
		this.state={
			username:''
		}
		this.username=this.username.bind(this)
		this.login=this.login.bind(this)
	}
	render(){
		let {username} = this.state
		return(
			<div>
				<div className="mian">
					<div className="mianhead">
						<Link to="/index/mine"><i className="fa fa-angle-left"></i></Link>
						<p>账号登录</p>
					</div>
					<div className="miancon">
						<p><input type='text' value={username} onChange={this.username} placeholder="用户名/邮箱/手机号"/></p>
						<p><input type='text' placeholder="密码"/><span className="fa fa-keyboard-o" id="keyb"></span></p>
						<p><button onClick={this.login}>登录</button></p>
					</div>
					<p id='reg'><Link to="/register">注册</Link></p>
				</div>
			</div>
		)
	}
	login(){
		localStorage.setItem("username",this.state.username)
		alert("登录成功")
		this.props.history.push('/index')
	}
	username(e){
		this.setState({
			username:e.target.value
		})
	}
}