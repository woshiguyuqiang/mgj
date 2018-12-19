import React,{Component} from 'react'
import '../../static/css/hot.css'
import {fetch as fetchPolyfill} from 'whatwg-fetch'
import fetchJsonp from 'fetch-jsonp'
import {NavLink,Redirect,Switch,Route} from 'react-router-dom'
export default class Snew extends Component{
	render(){
		return(
			<ul className="hot">
				<li>	
					<p>
						<img src={require('../../static/img/t2.jpg')} alt="" />
						<span>yoke鱼人</span>
					</p>
					<img src={require('../../static/img/t1.jpg')} alt="" />
				</li>
				<li>	
					<p>
						<img src={require('../../static/img/t2.jpg')} alt="" />
						<span>yoke鱼人</span>
					</p>
					<img src={require('../../static/img/t1.jpg')} alt="" />
				</li>
				<li>	
					<p>
						<img src={require('../../static/img/t2.jpg')} alt="" />
						<span>yoke鱼人</span>
					</p>
					<img src={require('../../static/img/t1.jpg')} alt="" />
				</li>
				<li>	
					<p>
						<img src={require('../../static/img/t2.jpg')} alt="" />
						<span>yoke鱼人</span>
					</p>
					<img src={require('../../static/img/t1.jpg')} alt="" />
				</li>
				<li>	
					<p>
						<img src={require('../../static/img/t2.jpg')} alt="" />
						<span>yoke鱼人</span>
					</p>
					<img src={require('../../static/img/t1.jpg')} alt="" />
				</li>
			</ul>
		)
	}
}