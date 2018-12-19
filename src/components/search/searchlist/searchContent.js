import React,{Component} from 'react'
import '../../../static/css/searchcontent.css'
import asyncaction from '../../../store/actions/asyncaction'
import {connect} from "react-redux"
class searchContent extends Component{
	constructor(props) {
	    super(props)
		this.state={}
	}
	render(){
		return(
			<ul className="searchleft">
			{
				this.props.list.length!=0?this.props.list.map((item,index)=>{
					return <li key={index}><img src={item.image} alt=""/>{item.title}{this.props.time}</li>
				}):''
			}
			</ul>
		)
	}
	componentDidUpdate(){
		this.props.getData(this.props.match.params.id)
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
