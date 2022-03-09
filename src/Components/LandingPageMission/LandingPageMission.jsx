import './LandingPageMission.css';
import Friends from '../../Images/Friends.jpeg';

function LandingPageMission() {
  return (
    <section className='Mission'>
      <div className='Mission_Container'>
        <h2>OUR MISSION</h2>
        <p>
          Dictumst dignissim accumsan elit nisi aenean interdum ac nulla mus
          elementum amet tempus, vivamus finibus parturient nunc dis augue
          sollicitudin aliquet lectus natoque. Facilisi morbi maximus dictum
          augue varius mauris accumsan netus eu conubia, phasellus sociosqu
          curae nec platea erat ipsum vitae eleifend.
        </p>
        <button>CONTACT AN EXPERT</button>
      </div>
      <img src={Friends} alt='Friends'></img>
    </section>
  );
}

export default LandingPageMission;
