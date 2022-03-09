import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <section className='Footer'>
      <div>
        <h4>Services</h4>
        <Link to='/'>To somewhere</Link>
        <Link to='/'>To somewhere</Link>
      </div>
      <div>
        <h4>Company</h4>
        <Link to='/'>To somewhere</Link>
        <Link to='/'>To somewhere</Link>
      </div>
      <div>
        <h4>Support</h4>
        <Link to='/'>To somewhere</Link>
        <Link to='/'>To somewhere</Link>
      </div>
      <div>
        <h4>Address</h4>
        <Link to='/'>To somewhere</Link>
        <Link to='/'>To somewhere</Link>
      </div>
    </section>
  );
}

export default Footer;
