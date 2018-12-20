import React,{Component} from 'react'
import '../../../static/css/searchshow.css'
import asyncaction from '../../../store/actions/asyncaction'
import {connect} from "react-redux"
import {Link,NavLink,Route,HashRouter,Switch,Redirect} from 'react-router-dom'
import SearchContent from './searchContent'
class searchShow extends Component{
	render(){
		return(
			<div className="searchshow">
				<div className="searchshowleft">
				{
					this.props.list.length!=0?this.props.list.map((item,index)=>{
						return <NavLink to={{pathname:"/searchlist/list/"+item.maitKey,p:{flag:true}}} replace key={index} onClick={this.change.bind(this)}><span>{item.title}</span></NavLink>
					}):''
				}
				</div>
				<div className="searchshowright">
				<Switch>
					<Route path="/searchlist/list/:id" component={SearchContent} />
					<Redirect to={"/searchlist/list/3627"} />
				</Switch>
				</div>
			</div>
		)
	}
	componentDidMount(){
		this.props.getData()
	}
	change(){
		this.forceUpdate()
	}
}
const mapStateToProps = (state)=>({
	list:state.goodhot.goodtitle
})
const mapDispatchToProps = (dispatch)=>({
	getData(){
		asyncaction.goodtitle(dispatch)
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(searchShow)
