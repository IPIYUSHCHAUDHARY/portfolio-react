import './Header.scss';

function Header() {
  return (
    <div className="main">
      <div className='container'>
        <h1 className='app-title'><a href='/' className='app-link'>Piyush Chauhan</a></h1>
        <h2 className='app-title-sub'>I'm a passionate <span>Web Developer</span> from India</h2>
      </div>
    </div>
  );
}

export default Header;
