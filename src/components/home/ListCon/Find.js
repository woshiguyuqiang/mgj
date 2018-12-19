import React,{Component} from 'react'
import {connect} from "react-redux"
import asyncaction from '../../../store/actions/asyncaction'
import '../../../static/css/find.css'
class Find extends Component{
	render(){
		return(
			<ul className="findlist">
				<li>
					<div className="findhead">
						<img src={require('../../../static/img/logo.jpg')} alt="" className="findi"/>
						<div className="findleft">
							<p>等等啊啊啊啊</p>
							<p>等等啊啊啊啊</p>
						</div>
						<div className="findright">
							<p>第几名</p>
							<p>第22周人气榜</p>
						</div>
					</div>
					<div className="findContent">
						<img src="" alt="" />
						<img src="" alt="" />
						<img src="" alt="" />
					</div>
					<p className="findBottom">
						<span><img src={require('../../../static/img/logo.jpg')} alt="" />aasd</span>
						<span>aasd</span>
						<span>aasdsdasd</span>
						<span>aasddwasdasd</span>
						<span>aasdasdasd</span>
						<span>aasddddd哒哒哒哒哒哒多多多多</span>
					</p>
					<p className="heng"></p>
				</li>
				<li>
					<div className="findhead">
						<img src={require('../../../static/img/logo.jpg')} alt="" className="findi"/>
						<div className="findleft">
							<p>等等啊啊啊啊</p>
							<p>等等啊啊啊啊</p>
						</div>
						<div className="findright">
							<p>第几名</p>
							<p>第22周人气榜</p>
						</div>
					</div>
					<div className="findContent">
						<img src="" alt="" />
						<img src="" alt="" />
						<img src="" alt="" />
					</div>
					<p className="findBottom">
						<span><img src={require('../../../static/img/logo.jpg')} alt="" />aasd</span>
						<span>aasd</span>
						<span>aasdsdasd</span>
						<span>aasddwasdasd</span>
						<span>aasdasdasd</span>
						<span>aasddddd哒哒哒哒哒哒多多多多</span>
					</p>
					<p className="heng"></p>
				</li>
			</ul>
		)
	}
	componentDidMount(){
		this.props.getData()
	}
}
const mapStateToProps = (state)=>({
	val:state.home.n,
	list:state.home.conent
})
const mapDispatchToProps = (dispatch)=>({
	getData(){
		asyncaction.getcontent(dispatch)
	}
})
export default connect(mapStateToProps,mapDispatchToProps)(Find)