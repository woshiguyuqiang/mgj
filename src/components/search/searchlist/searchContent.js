import React,{Component} from 'react'
import '../../../static/css/searchcontent.css'
import '../../../static/css/searchnew.css'
import asyncaction from '../../../store/actions/asyncaction'
import {connect} from "react-redux"
import SearchNew from './SearchNew'
import {Route,Link,NavLink,Switch,Redirect} from "react-router-dom"
class searchContent extends Component{
	constructor(props) {
	    super(props)
		this.flag=''
	}
	render(){
		return(
		<div className="searchleft">	
			<ul>
			{
				this.props.list.length!=0?this.props.list.map((item,index)=>{
					return <li key={index}><img src={item.image} alt=""/>{item.title}{this.props.time}</li>
				}):''
			}
			</ul>
			<div>
				<div className="searchnewtitle">
					<NavLink to={"/searchlist/list/"+this.props.match.params.id+"/searchnew/z"} replace onClick={this.change.bind(this)}>综合</NavLink>
					<NavLink to={"/searchlist/list/"+this.props.match.params.id+"/searchnew/x"} replace onClick={this.change.bind(this)}>销量</NavLink>
					<NavLink to={"/searchlist/list/"+this.props.match.params.id+"/searchnew/n"} replace onClick={this.change.bind(this)}>新品</NavLink>
				</div>
				<div>
					<Switch>
						<Route path="/searchlist/list/:id/searchnew/:list" exact component={SearchNew}/>
						<Redirect to={"/searchlist/list/"+this.props.match.params.id+"/searchnew/z"} />
					</Switch>
				</div>
			</div>
		</div>
		)
	}
	componentDidMount(){
		this.props.getData(this.props.match.params.id)
	}
	componentDidUpdate(){
		if(this.props.location.p){
			this.flag=this.props.location.p.flag;
			if(this.flag){
				this.props.getData(this.props.match.params.id)
				this.props.location.p.flag=false;
			}
		}
	}
	change(){
		this.forceUpdate()
	}
}
const mapStateToProps = (state)=>({
	list:state.goodhot.goodcontent
})
const mapDispatchToProps = (dispatch)=>({
	getData(id){
		asyncaction.goodcon(dispatch,id)
	}
})
export default connect(mapStateToProps,mapDispatchToProps)(searchContent)
