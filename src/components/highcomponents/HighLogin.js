import React,{Component} from 'react'
import { LocaleProvider, DatePicker, message } from 'antd';
import '../../../node_modules/antd/dist/antd.css';
let login =(Mine,Login)=>{
	class HighLogin extends Component{
		constructor(props) {
		    super(props)
			this.state={
				flag:localStorage.getItem("username")?true:false
			}
		}
		render(){
			let {flag} = this.state;
			if(flag){
				return(
				<div>
					<Mine />
				</div>	
				)
			}else{
				return(
				<div>
					<Login />
				</div>
				)
			}
		} 
		componentDidMount(){
			if(!this.state.flag){
				message.config({
				  duration: 0.5
				});
				message.success('您还没有登录')
			}
		}
	}
	return HighLogin
}
export default login;