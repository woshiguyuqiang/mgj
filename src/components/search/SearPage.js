import React,{Component} from 'react'
import {NavLink,Link} from 'react-router-dom'
import '../../static/css/searpage.css'
export default class SearPage extends Component{
	constructor(props) {
	    super(props)
	}
	render(){
		if(!localStorage.getItem("name")){
			localStorage.setItem("name",this.props.location.params.name)
		}
		return(
			<div>
				<div className="seartop">
					<Link to="index"><i className="fa fa-angle-left"></i></Link>
					<input type="text" placeholder={localStorage.getItem("name")}/>
					<span>搜索</span>
				</div>
				<ul className="searhis">
					<li>
						<span>历史搜索</span>
						<span>垃圾</span>
					</li>
					<li>暂无历史搜索</li>
				</ul>
				<div>
					
				</div>
			</div>
		)
	}
}