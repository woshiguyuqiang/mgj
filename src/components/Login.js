import React,{Component} from 'react'
import {Link} from "react-router-dom"
import '../static/css/login.css'
export default class Login extends Component{
	render(){
		return(
			<div className="login">
				<p>登录</p>
				<Link to="/wechat"><button><i className="fa fa-weixin"></i>微信登录</button></Link>
				<p><span></span></p>
				<p>其他方式登录</p>
				<ul>
					<li>
						<i className="fa fa-qq"></i>
						<Link to="/qq">
						<span>QQ登录</span>
						</Link>
					</li>
					<li>
						<i className="fa fa-mobile"></i>
						<Link to="/main">
						<span>免密登录</span>
						</Link>
					</li>
					<li>
						<i className="fa fa-user"></i>
						<Link to="/zhang">
						<span>账号登录</span>
						</Link>
					</li>
				</ul>
			</div>
		)
	}
}