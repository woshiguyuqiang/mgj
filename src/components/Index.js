import React, { Component ,Fragment} from 'react';
import {NavLink,HashRouter,BrowserRouter,Redirect,Route,Link,Switch} from 'react-router-dom'
import Home from "./home/Home"
import Shop from "./Shop"
import Video from "./Video"
import HighLogin from './highcomponents/HighLogin'
import Mine from "./Mine"
import Login from "./Login"
import Footer from "./common/Footer"
class Index extends Component {
  render() {
    return (
      <div className="box">
			<Fragment>
				<Switch>
					<Route path="/index/home" component={Home}/>
					<Route path="/index/shop" component={Shop}/>
					<Route path="/index/mine" component={HighLogin(Mine,Login)}/>
					<Redirect to="/index/home"/>
				</Switch>
			</Fragment>
			
			<Fragment>
				<Footer />
			</Fragment>
      </div>
    );
  }
}

export default Index;
