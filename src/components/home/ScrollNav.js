import React,{Component} from 'react'
import {connect} from "react-redux"
import asyncaction from '../../store/actions/asyncaction'
import '../../static/css/ScrollNav.css'
import Swiper from 'swiper'
import '../../../node_modules/swiper/dist/css/swiper.css'
class ScrollNav extends Component{
	constructor(props) {
	    super(props);
			this.state={
				flag:true
			}
	}
	render(){
		return(
			<div className="swiper-container" ref="scroll">
			  <div className="swiper-wrapper">
					{
						this.props.list.map((item,index)=>{
							return <div className="swiper-slide" key={index} id="sc">
										 <img src= {this.props.list[index]['image_800']} alt=""/>
										 </div>
						})
					}
			  </div>
			  <div className="swiper-pagination"></div>
			</div>
		)
	}
	componentDidMount(){
		this.props.getDate()
	}
	componentWillUpdate(){
		if(this.state.flag){
			new Swiper(this.refs.scroll, {
					autoplay: {
					delay: 1000
					},
				loop : true,
				pagination: {
					el: '.swiper-pagination',
					}
			})
			this.setState({flag:false})
		}
	}
}
const mapStateToProps = (state)=>({
	list:state.home.scroll
})
const mapDispatchToProps = (dispatch)=>({
	getDate(){
		asyncaction.getScroll(dispatch)
	}
})
export default connect(mapStateToProps,mapDispatchToProps)(ScrollNav)