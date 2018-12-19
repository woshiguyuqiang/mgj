import React,{Component} from 'react'
import '../../../static/css/searchinput.css'
export default class searchInput extends Component{
	render(){
		return(
			<div className="searchinput">
				<i className="fa fa-commenting-o"></i>
				<div>
					<i className="fa fa-search"></i>
					<input type="text" placeholder="外套" onFocus={this.handleFocus}/>
				</div>
				<i className="fa fa-shopping-cart"></i>
			</div>
		)
	}
}