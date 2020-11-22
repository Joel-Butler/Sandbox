import menuIcon from './img/menu.svg';
import {slide as Menu} from 'react-burger-menu';
import ReactNotification from 'react-notifications-component'
import { store as NotifyStore} from 'react-notifications-component';

import './App.css';
import 'react-notifications-component/dist/theme.css'

function App() {
  return (
    <div className="App">
    <ReactNotification />
     <Menu width={ '30%' } isOpen ={ false }>
        <a id="item1" className="menu-item" href="/">Item1</a>
        <a id="item2" className="menu-item" href="/">Item2</a>
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

export default App;
