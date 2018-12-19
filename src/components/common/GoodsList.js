import React,{Component} from 'react'
import '../../static/css/goodslist.css'
import {fetch as fetchPolyfill} from 'whatwg-fetch'
export default class GoodsList extends Component{
	render(){
		return(
			<div className="goodsl">
				<div className="goodsnav">快捷导航</div>
				<div className="goodslhead">
					<span className="fa fa-angle-left"></span>
					<span className="fa fa-shopping-cart"></span>
					<ul>
						<li></li>
						<li></li>
						<li></li>
					</ul>
					<h1><span>￥</span><span>198.00</span><span><del>￥282.34</del><strong>7折</strong></span></h1>
					<p>按时大大哇是更换非共和国环境和高科技规划的后果黄金客户挂机发达国家</p>
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
}