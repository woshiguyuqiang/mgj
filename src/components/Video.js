import React,{Component} from 'react'
import {fetch as fetchPolyfill} from 'whatwg-fetch'
import fetchJsonp from 'fetch-jsonp'
import {NavLink,HashRouter,BrowserRouter,Redirect,Route,Link,Switch} from 'react-router-dom'
import '../static/css/video.css'
import Hot from './video/Hot'
import Cd from './video/Cd'
import Mei from './video/Mei'
import Snew from './video/Snew'
export default class Video extends Component{
	render(){
		return(
			<div className="video">
				<div className="videohead">
						<NavLink to="/video/hot" replace>热门</NavLink>
						<NavLink to="/video/cd" replace>穿搭</NavLink>
						<NavLink to="/video/snew" replace>上新</NavLink>
						<NavLink to="/video/mei" replace>美妆</NavLink>
				</div>
				<div className="videocon">
					<Switch>
						<Route path="/video/hot" component={Hot}/>
						<Route path="/video/cd" component={Cd}/>
						<Route path="/video/mei" component={Mei}/>
						<Route path="/video/snew" component={Snew}/>
						<Redirect to="/video/hot" />
					</Switch>
				</div>
			</div>
		)
	}
}















/* 		 fetchPolyfill("/api/jsonp/multiget/3?pids=106930&appPlat=m&callback=callback",{
			methods:'GET',
			headers:{
				'Accept':'application/json',
				'Content-Type':'application/json'
			}
		})
		.then((res)=>{
			return res.json();
		})
		.then((reg)=>{
			console.log(reg)
		}) 
		
		
		
		var a=fetchJsonp('https://mce.mogucdn.com/jsonp/multiget/3?pids=106930&appPlat=m')
		  .then(function(response) {
			return response.json()
		  }).catch(function(ex) {
			console.log('parsing failed', ex)
		  })
		  console.log(a) */