import React,{Component} from 'react'
import '../../../static/css/finash.css'
export default class Finash extends Component{
	render(){
		return(
			<ul>
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
					<p className="finashContent">
						捱三顶五大所大所大所大所大所大所大大所大所大无大所大所大多哇所大所多阿达是大所大所大所大所多所大
					</p>
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
}