import React,{Component} from 'react'
import '../../../static/css/searchcontent.css'
export default class searchLeft extends Component{
	constructor(props) {
	    super(props)
		this.state={}
	}
	render(){
		return(
			<ul className="searchleft">
				<li><img src={require('../../../static/img/logo.jpg')} alt=""/>{this.props.match.params.id}</li>
				<li><img src={require('../../../static/img/logo.jpg')} alt=""/>正在流行</li>
				<li><img src={require('../../../static/img/logo.jpg')} alt=""/>正在流行</li>
				<li><img src={require('../../../static/img/logo.jpg')} alt=""/>正在流行</li>
				<li><img src={require('../../../static/img/logo.jpg')} alt=""/>正在流行</li>
				<li><img src={require('../../../static/img/logo.jpg')} alt=""/>正在流行</li>
				<li><img src={require('../../../static/img/logo.jpg')} alt=""/>正在流行</li>
				<li><img src={require('../../../static/img/logo.jpg')} alt=""/>正在流行</li>
				<li><img src={require('../../../static/img/logo.jpg')} alt=""/>正在流行</li>
				<li><img src={require('../../../static/img/logo.jpg')} alt=""/>正在流行</li>
				<li><img src={require('../../../static/img/logo.jpg')} alt=""/>正在流行</li>
				<li><img src={require('../../../static/img/logo.jpg')} alt=""/>正在流行</li>
				<li><img src={require('../../../static/img/logo.jpg')} alt=""/>正在流行</li>
				<li><img src={require('../../../static/img/logo.jpg')} alt=""/>正在流行</li>
				<li><img src={require('../../../static/img/logo.jpg')} alt=""/>正在流行</li>
				<li><img src={require('../../../static/img/logo.jpg')} alt=""/>正在流行</li>
				<li><img src={require('../../../static/img/logo.jpg')} alt=""/>正在流行</li>
				<li><img src={require('../../../static/img/logo.jpg')} alt=""/>正在流行</li>
				<li><img src={require('../../../static/img/logo.jpg')} alt=""/>正在流行</li>
			</ul>
		)
	}
}