import './App.css';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Hero from '../Hero/Hero';
import LandingPageDescription from '../LandingPageDescription/LandingPageDescription';
import WhatWeDo from '../WhatWeDo/WhatWeDo';
import Footer from '../Footer/Footer';
import DeanSled from '../../Images/Dean-Sled.jpeg';
import Friends from '../../Images/Friends.jpeg';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Hero></Hero>
      <LandingPageDescription></LandingPageDescription>
      <WhatWeDo></WhatWeDo>
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
      <Footer></Footer>
    </div>
  );
}

export default App;
