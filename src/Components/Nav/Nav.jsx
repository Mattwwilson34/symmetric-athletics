import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <nav>
      <div>Symmetric Athletics</div>
      <Link to='about'>About</Link> {' | '}
      <Link to='contact'>Contact</Link>
    </nav>
  );
};

export default Nav;
