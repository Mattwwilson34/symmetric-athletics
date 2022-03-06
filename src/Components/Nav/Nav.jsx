import { Link } from 'react-router-dom';
import logo from '../../Icons/logo.svg';
const Nav = () => {
  return (
    <nav className='Nav'>
      <div className='Logo'>
        <img className='Nav_Logo_SVG' src={logo} alt='logo'></img>
        <span className='Nav_Logo_Text'>Symmetric Athletics</span>
      </div>
      <Link to='about'>About</Link> {' | '}
      <Link to='contact'>Contact</Link>
    </nav>
  );
};

export default Nav;
