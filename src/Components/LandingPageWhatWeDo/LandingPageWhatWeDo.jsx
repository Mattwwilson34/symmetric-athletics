import { Link } from 'react-router-dom';
import './LandingPageWhatWeDo.css';
import logo from '../../Icons/logo.svg';
import personalTrainingImg from '../../Images/man-boxer-weights.jpg';
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
                Dean Culver is a certified strenght and conditioning specialist
                and professional athlete with over 15 years of experience
                helping athletes in a multitude of areanas recognize and reach
                their full athletic potential.
              </p>
              <Link to='/'>LEARN MORE</Link>
            </div>
            <div className='Card'>
              <img
                className='What_We_Do_Image2'
                src={personalTrainingImg}
                alt='image2'></img>
              <h3>1-ON-1 Personal Training</h3>
              <p>
                All of Move by Design's programs and packages consist of one on
                one training sessions with currated sport specific periodization
                focused on helping you perform your best when it matters most.
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
