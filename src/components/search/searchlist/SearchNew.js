import React,{Component} from 'react'
import {fetch as fetchPolyfill} from 'whatwg-fetch'
import fetchJsonp from 'fetch-jsonp'
import '../../../static/css/searchnew.css'
import {NavLink,HashRouter,BrowserRouter,Redirect,Route,Link,Switch} from 'react-router-dom'
export default class SearchNew extends Component{
	render(){
		return(
			<ul className="searchnew">
				<li>
					<img src={require('../../../static/img/logo.jpg')} alt=""/>
					<p>大实打实大所大</p>
					<p><span>$46</span><span>2345<i className="fa fa-star-o"></i></span></p>
				</li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		)
	}
}