import Bg from '../../assets/images/body-bg.webp';
import './Header.scss';

function Header() {
  return (
    <header className="app-header">
      <img src={Bg} className="app-logo" alt="logo" />
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
  );
}

export default Header;
