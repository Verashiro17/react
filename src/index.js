import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Layout } from 'antd';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppHeader from './components/Header/index';
import Login from './components/Login/index';
import List from './containers/List/';
import Detail from './containers/Detail/';
import 'antd/dist/antd.css';
import './style.css';
import Vip from'./containers/Vip/index';

const { Header, Footer, Content } = Layout;

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Layout style={{ minWidth: 1260, height: '100%' }}>
		      <Header className="header">
		      	<AppHeader />
		      </Header>
		      <Content className="content">
				  <Login>
					  
				  </Login>
	      		<Switch>
					<Route path='/Vip' component={Vip}/>
	      			<Route path='/detail/:id' component={Detail} />
		      		<Route path='/:id?' component={List} />
		      	</Switch>
		      </Content>
		      <Footer className="footer">@copyright Verashiro 2021</Footer>
	    	</Layout>
    	</BrowserRouter>
		)
	}
}


ReactDom.render(<App />, document.getElementById('root'));
