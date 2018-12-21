import React,{Component} from 'react'
import Search from './common/Search'
import '../static/css/shop.css'
import {Link} from 'react-router-dom'
import Swiper from 'swiper'
import BScroll from 'better-scroll'
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
			],
			index:0,
			shopgood:[]
		}
		
	}
	render(){
		let {list,shopgood} = this.state;
		return(
			<div className="shop" id="wrapper">
				<div className="content">
					<Search history={this.props.history}/>
					<ul className="shophead">
						<li><img src={"https://s10.mogucdn.com/mlcdn/c45406/181207_77jhd2kchd44k8eiegjk4l4g65g84_225x225.png"}/></li>
						<li><img src={"https://s10.mogucdn.com/mlcdn/c45406/180913_25e804lk773hdk695c60cai492111_225x225.png"}/></li>
						<li><img src={"https://s10.mogucdn.com/mlcdn/c45406/180913_387kgl3j21ff29lh04181iek48a6h_225x225.png"}/></li>
						<li><img src={"https://s10.mogucdn.com/mlcdn/c45406/180913_8d4e5adi8llg7c47lgh2291akiec7_225x225.png"}/></li>
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
							shopgood.map((item,index)=>{
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
			</div>
		)
	}
	componentDidMount(){
		this.props.getData(0)
		this.setState({
			shopgood:this.props.list
		})
		this.scroll = new BScroll(document.getElementById("wrapper"),{
			pullUpLoad:true,
			click:true
		})
		this.scroll.on("pullingUp",()=>{
			this.setState({index:++this.state.index},()=>{
				this.props.getData(this.state.index)
				this.setState({
					shopgood:this.state.shopgood.concat(this.props.list)
				})
			})
		})
		var mySwiper = new Swiper('.swiper-container-shop', {
			loop : true,
			pagination: {
			el: '.swiper-pagination-shop',
			}
		})
	}
	componentDidUpdate(){
		this.scroll.refresh();
		this.scroll.finishPullUp()
	}
}
	const mapStateToProps = (state)=>({
		list:state.home.conent
	})
	const mapDispatchToProps = (dispatch)=>({
		getData(index){
			asyncaction.getcontent(dispatch,index)
		}
	})

	export default connect(mapStateToProps,mapDispatchToProps)(Shop)