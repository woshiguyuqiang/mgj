import React, { Component ,Fragment} from 'react';
import {NavLink,HashRouter,BrowserRouter,Redirect,Route,Link,Switch} from 'react-router-dom'
import './static/css/app.css'
import Index from "./components/Index"
import SearPage from "./components/search/SearPage"
import SearchList from "./components/search/SearchList"
import Main from './components/login/Mian'
import Qq from './components/login/Qq'
import Wechat from './components/login/Wechat'
import Zhang from './components/login/Zhang'
import GoodsList from './components/common/GoodsList'
import dir from './directive/dir'
import Video from './components/Video'

class App extends Component {
  render() {
    return (
		<HashRouter>
      <div className="box">
			<Fragment>
				<Switch>
					<Route path="/" exact component={Index}/>
					<Route path="/index" component={Index}/>
					<Route path="/searpage" component={SearPage}/>
					<Route path="/searchlist" component={SearchList}/>
					<Route path="/main" component={Main}/>
					<Route path="/qq" component={Qq}/>
					<Route path="/wechat" component={Wechat}/>
					<Route path="/zhang" component={Zhang}/>
					<Route path="/goodslist" component={GoodsList}/>
					<Route path="/video" component={Video}/>
					<Redirect to="/index"/>
				</Switch>
			</Fragment>
      </div>
		</HashRouter>
    );
  }
}

export default App;
