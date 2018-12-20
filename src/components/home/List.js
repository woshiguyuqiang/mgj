import React,{Component} from 'react'
import {NavLink,Link,Switch,HashRouter,Route,Redirect} from 'react-router-dom'
import Find from './ListCon/Find'
import Atta from './ListCon/Atta'
import HighAtta from '../highcomponents/HighAtta'
import Login from "../Login"
import Finash from './ListCon/Finash'
import '../../static/css/list.css'
export default class List extends Component{
	render(){
		return(
			<div className="list">
				<div className="listNav" ref="listnav">
					<NavLink to="/index/home/find">发现</NavLink>
					<NavLink to="/index/home/atta">关注</NavLink>
					<NavLink to="/index/home/finash">流行</NavLink>
				</div>
				<div>
					<Switch>
						<Route path="/index/home/find" component={Find}/>
						<Route path="/index/home/atta" component={HighAtta(Atta)}/>
						<Route path="/index/home/finash" component={Finash}/> 
						<Redirect to="/index/home/find"/>
					</Switch>
				</div>
			</div>
		)
	}
	componentDidMount(){
		let he=this.refs.listnav.offsetTop
		document.onscroll=()=>{
			if(document.body.scrollTop>he){
				this.refs.listnav.style.cssText="position: fixed;top:0px;left: 0px;";
			}else{
				this.refs.listnav.style.position="initial"
			}	
		}
	}
	componentWillUnmount(){
		document.onscroll=''
	}
}