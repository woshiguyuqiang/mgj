import {fetch as fetchPolyfill} from 'whatwg-fetch'
import fetchJsonp from 'fetch-jsonp'
const getData = (dispatch)=>{
	dispatch({
		type:"HOME_DATA",
		payload:new Promise((resolve)=>{
			fetchJsonp('https://mce.mogucdn.com/jsonp/multiget/3?pids=106930&appPlat=m')
			.then(function(response) {
				resolve(response.json())
			}).catch(function(ex) {
			console.log('parsing failed', ex)
			})
		})
	})
}
const getScroll = (dispatch)=>{
	dispatch({
		type:"HOME_SCROLLNAV",
		payload:new Promise((resolve)=>{
			fetchJsonp('https://mce.mogucdn.com/jsonp/multiget/3?appPlat=m&pids=122224')
			.then(function(response) {
				resolve(response.json())
			}).catch(function(ex) {
			console.log('parsing failed', ex)
			})
		})
	})
}
const getcontent = (dispatch)=>{
	dispatch({
		type:"HOME_CONTENT",
		payload:new Promise((resolve)=>{
			fetchJsonp('http://list.meilishuo.com/search?frame=2&page=1&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=5f9986b8-f4de-4f25-b636-fb601a976c11&trace=0&cpc_offset=0&_=1545138855030')
			.then(function(response) {
				resolve(response.json())
			}).catch(function(ex) {
			console.log('parsing failed', ex)
			})
		})
	})
}

const goodinfo = (dispatch,id)=>{
	dispatch({
		type:"GOOD_INFO",
		payload:new Promise((resolve)=>{
			fetch('/detail/mls/v1/h5?iid='+id+'&_ajax=1&cparam=')
			.then((response)=>{
				return response.json();
			})
			.then((data)=>{
				resolve(data)
			})
		})
	})
}

const goodtitle = (dispatch)=>{
	dispatch({
		type:"GOOD_TITLE",
		payload:new Promise((resolve)=>{
			fetchJsonp('https://mce.mogucdn.com/jsonp/multiget/3?appPlat=m&pids=117330')
			.then(function(response) {
				resolve(response.json())
			}).catch(function(ex) {
			console.log('parsing failed', ex)
			})
		})
	})
}

const goodcon= (dispatch,id)=>{
	dispatch({
		type:"GOOD_CONTENT",
		payload:new Promise((resolve)=>{
			fetchJsonp('https://mce.mogucdn.com/jsonp/get/3?pid='+id+'&appPlat=m&_=1545219312622')
			.then(function(response) {
				resolve(response.json())
			}).catch(function(ex) {
			console.log('parsing failed', ex)
			})
		})
	})
}
export default {getData,getScroll,getcontent,goodinfo,goodtitle,goodcon};