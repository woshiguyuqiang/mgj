import React,{Component} from 'react'
import '../../static/css/home.css'
import {Link} from 'react-router-dom'
import Search from '../common/Search'
import ScrollNav from './ScrollNav'
import {connect} from "react-redux"
import { CSSTransitionGroup } from 'react-transition-group';
import List from './List'
import Nav from './Nav'
import asyncaction from '../../store/actions/asyncaction'
class Home extends Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className="home">
				<div className="header">
					<span>×</span>
					<div>
						<img src={require('../../static/img/logo.jpg')} alt=""/>
						<span>App用户可直接打开浏览哦~</span>
					</div>
					<strong>打开</strong>
				</div>
				<Search history={this.props.history}/>
				<ScrollNav />
				<Nav />
				<List />
			</div>
		)
	}
	componentDidMount(){
		this.props.getData()
	}
}
const mapStateToProps = (state)=>({
	val:state.home.n,
	list:state.home.list
})
const mapDispatchToProps = (dispatch)=>({
	getData(){
		asyncaction.getData(dispatch)
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)