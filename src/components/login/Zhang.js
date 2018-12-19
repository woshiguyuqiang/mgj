import React,{Component} from 'react'
import '../../static/css/mian.css'
import '../../static/css/zhang.css'
import {Link} from "react-router-dom"
export default class Zhang extends Component{
	render(){
		return(
			<div>
				<div className="mian">
					<div className="mianhead">
						<Link to="/index/mine"><i className="fa fa-angle-left"></i></Link>
						<p>账号登录</p>
					</div>
					<div className="miancon">
						<p><input type='text' placeholder="用户名/邮箱/手机号"/></p>
						<p><input type='text' placeholder="密码"/><span className="fa fa-keyboard-o" id="keyb"></span></p>
						<p><button>登录</button></p>
					</div>
				</div>
			</div>
		)
	}
}