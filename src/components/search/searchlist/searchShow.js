import React,{Component} from 'react'
import '../../../static/css/searchshow.css'
import {Link,NavLink,Route,HashRouter,Switch,Redirect} from 'react-router-dom'
import SearchContent from './searchContent'
export default class searchShow extends Component{
	render(){
		return(
			<div className="searchshow">
				<div className="searchshowleft">
					<NavLink to={"/searchlist/list/a/1"}><span>正在热售</span></NavLink>
					<NavLink to={"/searchlist/list/b/2"}><span>正在热售</span></NavLink>
					<NavLink to={"/searchlist/list/c/3"}><span>正在热售</span></NavLink>
					<NavLink to={"/searchlist/list/d/4"}><span>正在热售</span></NavLink>
					<NavLink to={"/searchlist/list/e/5"}><span>正在热售</span></NavLink>
					<NavLink to={"/searchlist/list/f/6"}><span>正在热售</span></NavLink>
					<NavLink to={"/searchlist/list/a/7"}><span>正在热售</span></NavLink>
					<NavLink to={"/searchlist/list/b/8"}><span>正在热售</span></NavLink>
					<NavLink to={"/searchlist/list/c/9"}><span>正在热售</span></NavLink>
					<NavLink to={"/searchlist/list/d/10"}><span>正在热售</span></NavLink>
					<NavLink to={"/searchlist/list/e/11"}><span>正在热售</span></NavLink>
					<NavLink to={"/searchlist/list/f/12"}><span>正在热售</span></NavLink>
					<NavLink to={"/searchlist/list/c/13"}><span>正在热售</span></NavLink>
					<NavLink to={"/searchlist/list/d/14"}><span>正在热售</span></NavLink>
					<NavLink to={"/searchlist/list/e/15"}><span>正在热售</span></NavLink>
					<NavLink to={"/searchlist/list/f/16"}><span>正在热售</span></NavLink>
				</div>
				<div className="searchshowright">
					<Switch>
						<Route path="/searchlist/list/:id/:time" component={SearchContent} />
						<Redirect to="/searchlist/list/a/1" />
					</Switch>
				</div>
			</div>
		)
	}
}
