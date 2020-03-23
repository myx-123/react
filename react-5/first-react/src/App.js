import React from 'react';
import logo from './logo.svg';
// import './App.css';
import Mains from './component/mains';
import {navs} from './component/router'
import {Route,Redirect} from 'react-router-dom'
import Myroute from './component/mains/myroute';


function App() {
  return (
    <div className="App">
      
      {
        sessionStorage.getItem("token")?
        <Mains>
        {
          navs.map((item)=>{
            return  <Myroute key={item.path} path={item.path} component={item.component} roles={item.roles}/>
          })
        }
          <Redirect from="/home" to="/home/dashboard" exact/>
      </Mains>:<Redirect to="/login"/>
      }
    </div>
  );
}

export default App;
