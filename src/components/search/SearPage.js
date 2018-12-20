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
						<i className="fa fa-trash"></i>
					</li>
					<li>暂无历史搜索</li>
				</ul>
				<div className="searthot">
					<p><i className="fa fa-star-o"></i>热门搜索</p>
					<ul>
						<li>睡衣</li>
						<li>牛仔裤</li>
						<li>卫衣</li>
						<li>风衣</li>
						<li>毛衣</li>
						<li>口红</li>
						<li>衬衫</li>
						<li>马甲</li>
						<li>外套</li>
						<li>鞋子</li>
					</ul>
				</div>
			</div>
		)
	}
}