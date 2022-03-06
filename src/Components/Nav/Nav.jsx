import '../../index.css';
import './Nav.css';
import { Link } from 'react-router-dom';
import logo from '../../Icons/logo.svg';
const Nav = () => {
  return (
    <nav className='Nav'>
      <Link className='Nav_Logo_Container' to='/'>
        <span className='Nav_Logo_Text'>
          <img className='Nav_Logo_SVG' src={logo} alt='logo'></img>Symmetric
          Athletics
        </span>
      </Link>
      <Link to='about'>About</Link>
      <Link to='contact'>Contact</Link>
      <Link to='scedule'>Schedule</Link>
    </nav>
  );
};

export default Nav;
