import logo from './logo.svg';
import menuIcon from './img/menu.svg';
import menuIconPressed from './img/menu-press.svg';
import notifyIcon from './img/notifications.svg';
import notifyIconPressed from './img/notifications-press.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="menu-left">

      </div>
      <div className="canvas">
        <header className="App-header">
          <img src={menuIcon} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <div className="notify-right"></div> 
      
    </div>
  );
}

export default App;
