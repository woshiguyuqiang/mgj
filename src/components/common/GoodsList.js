import React,{Component} from 'react'
import '../../static/css/goodslist.css'
import {connect} from "react-redux"
import asyncaction from '../../store/actions/asyncaction'
import {fetch as fetchPolyfill} from 'whatwg-fetch'
import {Link,NavLink} from "react-router-dom"
class GoodsList extends Component{
	render(){
		return(
			<div className="goodsl">
				<div className="goodsnav">快捷导航</div>
				<div className="goodslhead">
					<Link to="/index/shop" replace><span className="fa fa-angle-left"></span></Link>
					<Link to="/index/shop" replace><span className="fa fa-shopping-cart"></span></Link>
					<ul>
					{
						this.props.goodimg.length>0?this.props.goodimg.map((item,index)=>{
							return <li key={index}>
										<img src={item} alt=""/>
							       </li>
						}):''
					}
					</ul>
					<h1><span>￥</span><span>{this.props.goodinfo.lowPrice}</span><span><del>￥282.34</del><strong>7折</strong></span></h1>
					<p>{this.props.goodinfo.title}</p>
					<p>免邮费</p>
				</div>
				<ul className="goodsinfor">
					<li><i className="fa fa-check-circle-o"></i><span>48小时发货</span></li>
					<li><i className="fa fa-check-circle-o"></i><span>7天无理由退货</span></li>
					<li><i className="fa fa-check-circle-o"></i><span>延误必赔</span></li>
					<li>></li>
				</ul>
				<p className="goodscolor">
					<span>请选择:颜色尺码</span>
					<span>></span>
				</p>
				<div className="goodsok">
					<p className="goodscolor">
						<span>买家评价43|销量390</span>
						<span>></span>
					</p>
					<ul>
						<li>有图片(23)</li>
						<li>款式好(54)</li>
						<li>质量很好(22)</li>
						<li>料子很不错(143)</li>
					</ul>
				</div>
				<ul className="goodsfoot">
					<li>
						<i className="fa fa-address-card"></i>
						<span>店铺</span>
					</li>
					<li>
						<i className="fa fa-commenting-o"></i>
						<span>客服</span>
					</li>
					<li>
						<i className="fa fa-star-o"></i>
						<span>收藏</span>
					</li>
					<li>加入购物车</li>
					<li>立即购买</li>
				</ul>
			</div>
		)
	}
	componentDidMount(){
		this.props.getData(this.props.match.params.id)
	}
}
const mapStateToProps = (state)=>({
	goodimg:state.shop.goodimg,
	goodinfo:state.shop.goodinfo
	
})
const mapDispatchToProps = (dispatch)=>({
	getData(id){
		asyncaction.goodinfo(dispatch,id)
	}
})
export default connect(mapStateToProps,mapDispatchToProps)(GoodsList)