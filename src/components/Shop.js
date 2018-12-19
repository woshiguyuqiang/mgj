import React,{Component} from 'react'
import Search from './common/Search'
import '../static/css/shop.css'
import {Link} from 'react-router-dom'
import Swiper from 'swiper'
import '../../node_modules/swiper/dist/css/swiper.css'
import asyncaction from '../store/actions/asyncaction'
import {connect} from "react-redux"
class Shop extends Component{
	constructor(props) {
	    super(props)
		this.state={
			list:[
				{
					title:"女装",
					url:"",
					img:""
				},
				{
					title:"女装",
					url:"",
					img:""
				},
				{
					title:"女装",
					url:"",
					img:""
				},
				{
					title:"女装",
					url:"",
					img:""
				},
				{
					title:"女装",
					url:"",
					img:""
				},
				{
					title:"女装",
					url:"",
					img:""
				},
				{
					title:"女装",
					url:"",
					img:""
				},
				{
					title:"女装",
					url:"",
					img:""
				},
				{
					title:"女装",
					url:"",
					img:""
				},
				{
					title:"女装",
					url:"",
					img:""
				},
				{
					title:"女装",
					url:"",
					img:""
				},
				{
					title:"女装",
					url:"",
					img:""
				},
				{
					title:"女装",
					url:"",
					img:""
				},
				{
					title:"女装",
					url:"",
					img:""
				},
				{
					title:"女装",
					url:"",
					img:""
				}
			]
		}
		
	}
	render(){
		let {list} = this.state;
		return(
			<div className="shop">
				<Search history={this.props.history}/>
				<ul className="shophead">
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
				<ul className="shopnav">
					{
						list.map((item,index)=>{
							return <li key={index}>
										<div></div>
										<Link to={item.url}>{item.title}</Link>
									</li>
						})
					}
				</ul>
				<div className="shophot">
					<img src={require('../static/img/hot.jpg')} alt="" />
				</div>
				<div className="swiper-container-shop">
					<div className="swiper-wrapper">
					<div className="swiper-slide">
						<div>
							<img src={require('../static/img/xie.jpg')} alt="" />
							<p>雪地靴创发</p>
							<p>让你的脚想打了</p>
						</div>
						<div>
							<img src={require('../static/img/xie.jpg')} alt="" />
							<p>雪地靴创发</p>
							<p>让你的脚想打了</p>
						</div>
						<div>
							<img src={require('../static/img/xie.jpg')} alt="" />
							<p>雪地靴创发</p>
							<p>让你的脚想打了</p>
						</div>
					</div>
					<div className="swiper-slide">
						<div>
							<img src="" alt="" />
							<p>雪地靴创发</p>
							<p>让你的脚想打了</p>
						</div>
						<div>
							<img src="" alt="" />
							<p>雪地靴创发</p>
							<p>让你的脚想打了</p>
						</div>
						<div>
							<img src="" alt="" />
							<p>雪地靴创发</p>
							<p>让你的脚想打了</p>
						</div>
					</div>
					</div>
					<div className="swiper-pagination-shop"></div>
				</div>
				<div className="shopfin">
					<h1>流行元素</h1>
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
				<div className="shoplike">
					<h1>——<i className="fa fa-heart-o"></i>猜你喜欢——</h1>
					<ul>
					{
						this.props.list.map((item,index)=>{
							return <li key={index}>
								<Link to={"/goodslist/"+item.iid}>
									<div>
										<img src={item.show.img} alt=""/>
										<span>已售{item.cfav}件</span>
									</div>
									<p>{item.title}</p>
									<p><span>{item.orgPrice}</span><span>{item.cfav}<i className="fa fa-star-o"></i></span></p>
									<p>立即购买</p>
								</Link>
							</li>
						})
					}
					</ul>
				</div>
			</div>
		)
	}
	componentDidMount(){
		this.props.getData()
		var mySwiper = new Swiper('.swiper-container-shop', {
				autoplay: {
				delay: 1000
				},
			loop : true,
			pagination: {
				el: '.swiper-pagination-shop',
				}
		})
	}
}
const mapStateToProps = (state)=>({
	list:state.home.conent
})
const mapDispatchToProps = (dispatch)=>({
	getData(){
		asyncaction.getcontent(dispatch)
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(Shop)