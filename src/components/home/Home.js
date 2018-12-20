import React,{Component} from 'react'
import '../../static/css/home.css'
import {Link} from 'react-router-dom'
import Search from '../common/Search'
import ScrollNav from './ScrollNav'
import {connect} from "react-redux"
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import List from './List'
import Nav from './Nav'
import asyncaction from '../../store/actions/asyncaction'
class Home extends Component{
	constructor(props) {
		super(props);
		this.state={show:true}
	}
	render(){
		return(
			<div className="home">
			<CSSTransition timeout={1000} in={this.state.show} classNames="fade">
				<div className="header" >
					<span onClick={this.exit.bind(this)}>×</span>
					<div>
						<img src={require('../../static/img/logo.jpg')} alt=""/>
						<span>App用户可直接打开浏览哦~</span>
					</div>
					<strong>打开</strong>
				</div>
			</CSSTransition>
				<Search history={this.props.history}/>
				<ScrollNav />
				<Nav />
				<List />
			</div>
		)
	}
	exit(){
		this.setState({show:false})
	}
	componentDidMount(){
		this.props.getData()
	}
}
const mapStateToProps = (state)=>({
	list:state.home.list
})
const mapDispatchToProps = (dispatch)=>({
	getData(){
		asyncaction.getData(dispatch)
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)