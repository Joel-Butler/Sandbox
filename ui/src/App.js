import menuIcon from './img/menu.svg';
import {slide as Menu} from 'react-burger-menu';
import './App.css';

function App() {
  return (
    <div className="App">
     <Menu width={ '30%' } >
        <a id="item1" className="menu-item" href="/">Item1</a>
        <a id="item2" className="menu-item" href="/">Item2</a>
      </Menu>
      <div className="canvas">
        <header className="App-header">
        <p> 
          <img src={menuIcon} className="App-logo" alt="logo" /> Sandbox UI sample
        </p>
        </header>
      </div>
    </div>
  );
}

export default App;
