import React,{Component} from 'react'
import { LocaleProvider, DatePicker, message } from 'antd';
import '../../../node_modules/antd/dist/antd.css';
let login =(Atta)=>{
	class HighAtta extends Component{
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
					<Atta />
				</div>	
				)
			}else{
				return(
				<div>
					{
						<button onClick={this.toLogin.bind(this)}>点击登录</button>
					}
				</div>	
				)
			}
		}
		toLogin(){
			this.props.history.push("/index/mine")
		}
	}
	return HighAtta
}
export default login;