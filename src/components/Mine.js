import React,{Component} from 'react'
import '../static/css/mine.css'
export default class Mine extends Component{
	constructor(props) {
	    super(props)
		this.state={
			
		}
		this.exit=this.exit.bind(this)
	}
	render(){
		return(
			<div className="mine">
				<div className="minehead">
					<div className="minetop">
						<img src={require("../static/img/person.jpg")} />
						<p>{localStorage.getItem("username")}</p>
						<span><i>人</i>个人主页</span>
					</div>
				</div>
				<div>
					<p><span><i className="fa fa-commenting-o"></i>消息</span><i className="fa fa-chevron-right"></i></p>
					<p><span><i className="fa fa-star"></i>收藏</span><i className="fa fa-chevron-right"></i></p>
				</div>
				<div>
					<p><span><i className="fa fa-shopping-cart"></i>购物车</span><i className="fa fa-chevron-right"></i></p>
					<p><span><i className="fa fa-clipboard"></i>我的订单</span><i className="fa fa-chevron-right"></i></p>
					<p><span><i className="fa fa-table"></i>卡券红包</span><i className="fa fa-chevron-right"></i></p>
				</div>
				<div>
					<p><span><i className="fa fa-credit-card"></i>我的钱包</span><i className="fa fa-chevron-right"></i></p>
					<p><span><i className="fa fa-map-marker"></i>收货地址</span><i className="fa fa-chevron-right"></i></p>
					<p><span><i className="fa fa-user"></i>客服</span><i className="fa fa-chevron-right"></i></p>
				</div>
				<p id="td" onClick={this.exit}>退出登录</p>
			</div>
		)
	}
	exit(){
		localStorage.removeItem('username')
		localStorage.removeItem('token')
		alert("退出成功")
		this.props.histort.push('/index/mine/'+Math.random());
	}
}