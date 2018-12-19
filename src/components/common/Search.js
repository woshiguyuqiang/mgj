import React,{Component} from 'react'
import '../../static/css/search.css'
import {Link} from 'react-router-dom'
export default class Search extends Component{
	constructor(props) {
	    super(props);
			this.state={}
			this.handleFocus=this.handleFocus.bind(this)
	}
	render(){
		return(
			<div className="search">
				<Link to="/searchlist"><i className="fa fa-list-ul"></i></Link>
				<div>
					<i className="fa fa-search"></i>
					<input type="text" placeholder="外套" onFocus={this.handleFocus}/>
				</div>
				<Link to="/index/mine"><i className="fa fa-commenting-o"></i></Link>
			</div>
		)
	}
	handleFocus(){
		this.props.history.push({pathname:"/searpage",params:{name:"123"}})
	}
}