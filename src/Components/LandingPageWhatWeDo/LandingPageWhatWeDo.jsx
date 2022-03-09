import { Link } from 'react-router-dom';
import logo from '../../Icons/logo.svg';
import image2 from '../../Images/image2.jpg';
import Dean from '../../Images/Dean.jpeg';

function LandingPageWhatWeDo() {
  return (
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
              <img className='What_We_Do_Image1' src={Dean} alt='image1'></img>
              <h3>MEET YOUR PERSONAL TRAINER</h3>
              <p>
                Nec metus nisl in pulvinar sem dictumst fringilla vel vehicula
                class pretium, massa ipsum vitae habitant at mattis inceptos
                habitasse purus. Neque ridiculus nibh vitae aenean cursus tempor
                finibus mauris habitant ut imperdiet varius, etiam nascetur
                dictumst sodales diam donec feugiat rhoncus quam fames volutpat.
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
                habitasse purus. Neque ridiculus nibh vitae aenean cursus tempor
                finibus mauris habitant ut imperdiet varius, etiam nascetur
                dictumst sodales diam donec feugiat rhoncus quam fames volutpat.
              </p>
              <Link to='/'>LEARN MORE</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPageWhatWeDo;
