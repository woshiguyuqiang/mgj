import React,{Component} from 'react'
import '../../static/css/goodslist.css'
import {connect} from "react-redux"
import asyncaction from '../../store/actions/asyncaction'
import {fetch as fetchPolyfill} from 'whatwg-fetch'
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import {Link,NavLink} from "react-router-dom"
class GoodsList extends Component{
	constructor(props) {
	    super(props);
			this.state={
				show:false,
				num:1
			}
			this.goodsinfor=this.goodsinfor.bind(this)
	}
	render(){
		let {num} = this.state;
		return(
			<div className="goodsl">
				<div className="goodsnav">快捷导航</div>
				<CSSTransition timeout={1000} in={this.state.show} classNames="maxtoph">
				<div className="maxtop" ref="maxtop" onClick={this.gtop.bind(this)}>置顶</div>
				</CSSTransition>
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
				<ul className="goodsinfor" onClick={this.goodsinfor}>
					<li><i className="fa fa-check-circle-o"></i><span>48小时发货</span></li>
					<li><i className="fa fa-check-circle-o"></i><span>7天无理由退货</span></li>
					<li><i className="fa fa-check-circle-o"></i><span>延误必赔</span></li>
					<li>></li>
				</ul>
				
					<div className="goodsinforshow" ref="goodsinforshow">
					<CSSTransition timeout={1000} in={this.state.show} classNames="good">
						<div className="goodsinforshow_con" ref="goodsinforshow_con">
							<p><span onClick={this.exit.bind(this)}>×</span></p>
							<p>服务说明</p>
							<ul>
								<li>
									<p>72小时发货</p>
								</li>
								<li>
									<p>7天无理由退货</p>
									<p>物流签收后7天内买家无理由退货,需要满足退货条件</p>
								</li>
								<li>
									<p>延误必赔</p>
									<p>急速送货保障,若快递送货时间晚于品改时间,可获得赔偿</p>
								</li>
								<li>
									<p>退货补偿费</p>
									<p>急速送货保障,若快递送货时间晚于品改时间,可获得赔偿啊啊啊多少</p>
								</li>   
								<li>
									<p>白富美分期购</p>
									<p>急速送货保障,若快递送货时间晚于品改时间,可获得赔偿啊啊啊多少34是否阿萨德阿萨德45</p>
								</li>
								<li>
									<p>全国包邮</p>
								</li> 
							</ul>
						</div>
					</CSSTransition>
					</div>
				
				
				<p className="goodscolor" onClick={this.goodcolor_wrap.bind(this)}>
					<span>请选择:颜色尺码</span>
					<span>></span>
				</p>
				
				<div className="goodsinforshow" id='goodscolor' ref="goodcolor_wrap">
				<CSSTransition timeout={1000} in={this.state.show} classNames="good">
					<div className="goodsinforshow_con" id='goodscolor_con' ref="goodcolor_con">
						<div className="goodcolor_head">
						<span onClick={this.goodcolor_con.bind(this)}>×</span>
						<img src={require('../../static/img/logo.jpg')} alt=""/>
						<p>
							<span>$115.00</span>
							<span>库存1690件</span>
							<span>请选择:颜色</span>
						</p>
						</div>
						<div className="goodcolor_cho"><h3>颜色:</h3><span>白色</span><span>粉色</span></div>
						<div className="goodcolor_cho"><h3>尺码:</h3><span>均码</span></div>
						<div className="colorgou"><h3>数量:</h3><p><button onClick={this.jian.bind(this)}>-</button><span>{num}</span><button onClick={this.add.bind(this)}>+</button></p></div>
						<p className="colorche"><span>加入购物车</span><span>拼团购买</span></p>
					</div>
				</CSSTransition>
				</div>
				
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
						<i className="fa fa-home"></i>
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
				<ul className="pingjia">
					<li>
						<p><img src={require('../../static/img/logo.jpg')} alt=""/>雨****填</p>
						<p>质量不错,穿着很舒服,大小合适,很满意</p>
						<p>{new Date().toLocaleDateString(new Date().getTime())}</p>
						<p></p>
					</li>
					<li>
						<p><img src={require('../../static/img/logo.jpg')} alt=""/>好****省</p>
						<p>质量不错,穿着很舒服,大小合适,很满意</p>
						<p>{new Date().toLocaleDateString(new Date().getTime())}</p>
						<p></p>
					</li>
				</ul>
			</div>
		)
	}
	goodsinfor(){
		this.refs.goodsinforshow.style.display="block"
		this.setState({show:true})
	}
	exit(){
		this.setState({show:false})
		setTimeout(()=>{
			this.refs.goodsinforshow.style.display="none"
		},400)
	}
	goodcolor_wrap(){
		this.setState({show:true})
		this.refs.goodcolor_wrap.style.display="block"
	}
	goodcolor_con(){
		this.setState({show:false})
		setTimeout(()=>{
			this.refs.goodcolor_wrap.style.display="none"
		},400)
	}
	jian(){
		if(this.state.num>1){
			this.setState({
				num:--this.state.num
			})
		}
	}
	add(){
		this.setState({
			num:++this.state.num
		})
	}
	gtop(){
		document.body.scrollTop=0
	}
	componentDidMount(){
		this.props.getData(this.props.match.params.id)
		document.onscroll=()=>{
			if(document.body.scrollTop>300){
				this.refs.maxtop.style.display="block"
				this.setState({show:true})
			}else{
				this.setState({show:false})
				setTimeout(()=>{
					this.refs.maxtop.style.zIndex="22"
				},400)
			}
		}
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