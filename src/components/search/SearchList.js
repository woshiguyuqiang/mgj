import React,{Component} from 'react'
import '../../static/css/searchlist.css'
import Searchinput from './searchlist/searchInput'
import SearchShow from './searchlist/searchShow'
export default class SearchList extends Component{
	render(){
		return(
			<div>
				<Searchinput />
				<SearchShow />
			</div>
		)
	}
}