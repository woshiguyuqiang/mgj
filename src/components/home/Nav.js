import React,{Component} from 'react'
import {connect} from "react-redux"
import asyncaction from '../../store/actions/asyncaction'
import '../../static/css/nav.css'
class Nav extends Component{
	constructor(props) {
	  super(props)
		this.state={
			list:''
		}
	}
	render(){
		return(
			<div className="nav">
				<ul>
					{
						this.props.list.map((item,index)=>{
							return <li key={index}>
									   <img src={this.props.list[index].image} alt=""/>
									   <p>{this.props.list[index].title}</p>
								   </li>
						})	
					}
				</ul>
			</div>
		)
	}
}
const mapStateToProps = (state)=>({
	val:state.home.n,
	list:state.home.list
})
const mapDispatchToProps = (dispatch)=>({
	getData(){
		asyncaction(dispatch)
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(Nav)
