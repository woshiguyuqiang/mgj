import React,{Component} from 'react'
import {Link} from "react-router-dom"
import '../../static/css/mian.css'
export default class Main extends Component{
	render(){
		return(
			<div className="mian">
				<div className="mianhead">
					<Link to="/index/mine"><i className="fa fa-angle-left"></i></Link>
					<p>免密登录</p>
				</div>
				<div className="miancon">
					<p><input type='text' placeholder="手机号"/></p>
					<p><input type='text' placeholder="验证码"/><span>获取验证码</span></p>
					<p><button>登录</button></p>
				</div>
			</div>
		)
	}
}