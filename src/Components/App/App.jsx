import './App.css';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Hero from '../Hero/Hero';
import logo from '../../Icons/logo.svg';
import image2 from '../../Images/image2.jpg';
import Dean from '../../Images/Dean.jpeg';
import DeanSled from '../../Images/Dean-Sled.jpeg';
import Friends from '../../Images/Friends.jpeg';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Hero></Hero>
      <section className='Description'>
        <h3>IT'S TIME TO REACH YOUR FULL POTENTIAL</h3>
        <p>
          Lacus lacinia bibendum ex porttitor laoreet fermentum torquent, primis
          vestibulum neque in varius praesent, duis justo dictumst interdum sit
          pharetra.
        </p>
        <p>
          Luctus massa ligula quisque aliquam sapien curae maecenas at, rutrum
          scelerisque senectus gravida nunc dapibus metus, varius ipsum mollis
          sem elit eu volutpat. Risus ultrices lacinia maecenas nibh facilisi
          id, habitasse arcu at tortor sagittis nullam, feugiat eu laoreet in
          penatibus.
        </p>
        <p>
          Ultrices massa malesuada lectus ex hac pretium quis sagittis, fames at
          donec sem tempor posuere porttitor proin molestie, ac ad ipsum
          vehicula ante felis dapibus. Eget libero lorem vitae ac turpis aptent
          sed ex facilisis vestibulum nisl, dolor phasellus finibus mauris
          auctor non nec proin tincidunt.
        </p>
        <p>
          Fermentum sem vitae erat magna cubilia habitant imperdiet mauris
          torquent interdum convallis elementum vulputate curabitur amet duis
          ligula, quam mi sapien inceptos eu ipsum dictumst tincidunt aenean nec
          viverra malesuada cras urna aptent tellus. Montes amet facilisis
          placerat tincidunt litora aliquam porttitor tempus dictum nisl et
          bibendum platea, pulvinar tristique ante morbi fames mattis habitasse
          posuere lacus condimentum molestie tempor.
        </p>
        <button>ABOUT US</button>
      </section>
      <section className='What_We_Do'>
        <div className='What_We_Do_Hero'>
          <img className='What_We_Do_Hero_Logo' src={logo} alt='logo'></img>
          <div className='What_We_Do_Wrapper'>
            <div className='What_We_Do_Text'>
              <h3>WHAT WE DO</h3>
              <p>
                Aenean dui aptent morbi aliquet a venenatis sem sodales vel
                himenaeos lectus, scelerisque phasellus nisi quam varius finibus
                litora quisque augue. Accumsan suscipit dictumst id dignissim
                habitant molestie elit pulvinar proin felis eros, tempor odio
                sollicitudin ac rutrum auctor lectus lobortis sem.
              </p>
            </div>
            <div className='Card_Container'>
              <div className='Card'>
                <img
                  className='What_We_Do_Image1'
                  src={Dean}
                  alt='image1'></img>
                <h3>MEET YOUR PERSONAL TRAINER</h3>
                <p>
                  Nec metus nisl in pulvinar sem dictumst fringilla vel vehicula
                  class pretium, massa ipsum vitae habitant at mattis inceptos
                  habitasse purus. Neque ridiculus nibh vitae aenean cursus
                  tempor finibus mauris habitant ut imperdiet varius, etiam
                  nascetur dictumst sodales diam donec feugiat rhoncus quam
                  fames volutpat.
                </p>
                <Link to='/'>LEARN MORE</Link>
              </div>
              <div className='Card'>
                <img
                  className='What_We_Do_Image2'
                  src={image2}
                  alt='image2'></img>
                <h3>1-ON-1 STICK FIGHTING</h3>
                <p>
                  Nec metus nisl in pulvinar sem dictumst fringilla vel vehicula
                  class pretium, massa ipsum vitae habitant at mattis inceptos
                  habitasse purus. Neque ridiculus nibh vitae aenean cursus
                  tempor finibus mauris habitant ut imperdiet varius, etiam
                  nascetur dictumst sodales diam donec feugiat rhoncus quam
                  fames volutpat.
                </p>
                <Link to='/'>LEARN MORE</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='Results'>
        <div className='Results_Container'>
          <h2>GETTING RESULTS SINCE 2021</h2>
          <p>
            Dictumst dignissim accumsan elit nisi aenean interdum ac nulla mus
            elementum amet tempus, vivamus finibus parturient nunc dis augue
            sollicitudin aliquet lectus natoque. Facilisi morbi maximus dictum
            augue varius mauris accumsan netus eu conubia, phasellus sociosqu
            curae nec platea erat ipsum vitae eleifend. Mauris inceptos tortor
            velit gravida ligula aliquet malesuada turpis facilisis justo risus
            blandit nulla tempus maecenas conubia himenaeos, quisque platea
            imperdiet pellentesque litora scelerisque penatibus sagittis iaculis
            dictum a ante sollicitudin ultrices quam.
          </p>
          <img src={DeanSled} alt='Dean Sled'></img>
        </div>
      </section>
      <section className='Mission'>
        <div className='Mission_Container'>
          <h2>OUR MISSION</h2>
          <p>
            Dictumst dignissim accumsan elit nisi aenean interdum ac nulla mus
            elementum amet tempus, vivamus finibus parturient nunc dis augue
            sollicitudin aliquet lectus natoque. Facilisi morbi maximus dictum
            augue varius mauris accumsan netus eu conubia, phasellus sociosqu
            curae nec platea erat ipsum vitae eleifend. Mauris inceptos tortor
            velit gravida ligula aliquet malesuada turpis facilisis justo risus
            blandit nulla tempus maecenas conubia himenaeos, quisque platea
            imperdiet pellentesque litora scelerisque penatibus sagittis iaculis
            dictum a ante sollicitudin ultrices quam.
          </p>
          <button>CONTACT AN EXPERT</button>
        </div>
        <img src={Friends} alt='Friends'></img>
      </section>
      <section className='Footer'>
        <div>
          <h4>Services</h4>
          <Link to='/'>To somewhere</Link>
          <Link to='/'>To somewhere</Link>
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
          <Link to='/'>To somewhere</Link>
        </div>
        <div>
          <h4>Address</h4>
          <Link to='/'>To somewhere</Link>
          <Link to='/'>To somewhere</Link>
          <Link to='/'>To somewhere</Link>
          <Link to='/'>To somewhere</Link>
          <Link to='/'>To somewhere</Link>
          <Link to='/'>To somewhere</Link>
        </div>
      </section>
    </div>
  );
}

export default App;
