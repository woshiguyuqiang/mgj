import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import '../../static/css/footer.css'
export default class Footer extends Component{
	constructor(props){
		super(props)
		this.state={
			list:[
				{
					title:'首页',
					url:'/index/home'
				},
				{
					title:'商城',
					url:'/index/shop'
				},
				{
					title:'直播',
					url:'/video'
				},
				{
					title:'我',
					url:'/index/mine'
				}
			]
		}
	}
	render(){
		let {list} = this.state;
		return(
			<div className="footer">
				<ul>
					{
						list.map((item,index)=>{
							return <li key={index}>
									 <NavLink to={item.url}>{item.title}</NavLink>
								   </li>
						})
					}
				</ul>
			</div>
		)
	}
}