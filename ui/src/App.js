import menuIcon from './img/menu.svg';
import homeIcon from './img/Home_Icon.svg';
import appIcon from './img/Apps_Icon.svg';
import {slide as Menu} from 'react-burger-menu';
import ReactNotification from 'react-notifications-component'
import { store as NotifyStore} from 'react-notifications-component';

import './App.css';
import 'react-notifications-component/dist/theme.css'

function App() {
  
  function MenuItem(props) {
    function menuNotify(e, name){
      NotifyStore.addNotification({
        title: "Menu Notification!",
        message: name + " was clicked",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
    }
      return <li className="menu-item" onClick={e=> menuNotify(e, props.Name)}>
      <img className="menu-item-icon" src= {props.Icon} alt={props.IconAlt}></img>{props.Name}</li>

  }

  function testNotify() {
    NotifyStore.addNotification({
      title: "Test!",
      message: "This is a test notification.",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true
      }
    });
  }

  return (
    <div className="App">
    <ReactNotification />
     <Menu width={ '30%' } isOpen ={ false }>
       <ul>
        <MenuItem Name="Home" Icon={homeIcon} IconAlt="House" />
        <MenuItem Name="Apps" Icon={appIcon} IconAlt="Apps Tiles 3x3" />        </ul>
      </Menu>
      <div className="canvas">
        <header className="App-header">
        <p> 
          <img src={menuIcon} className="App-logo" alt="logo" /> Sandbox UI sample
        </p>
        </header>
        <div className="innerContent">
          <p>This is my first pass at an interactive react page as a UI for the microservices
            hosted on my kubernetes platform. Information on how this works can be found <a href="https://wiki.jhbutler.info/en/Apps/Sandbox/Overview" >here</a>.
          </p>
          <p><button onClick= {testNotify} >Test Notification</button></p>
        </div>
      </div>
    </div>
  );
}




export default App;
