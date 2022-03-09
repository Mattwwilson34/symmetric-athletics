import './LandingPageResults.css';
import DeanSled from '../../Images/Dean-Sled.jpeg';

function LandingPageResults() {
  return (
    <section className='Results'>
      <div className='Results_Container'>
        <h2>GETTING RESULTS SINCE 2021</h2>
        <p>
          Move by Design has been helping athletes maximize their potential
          since its inception in 2021. Atheltes who have found success with Move
          by Design have played for national and word chanmpion sports teams
          including:
        </p>
        <div className='Results_List_Container'>
          <ul>
            <li>
              <span className='Results_Bullet'></span>UNC Dark Side{' '}
              <span>(National Champions 2021)</span>
            </li>
            <li>
              <span className='Results_Bullet'></span>UNC Pleades{' '}
              <span>(National Champions 2021)</span>
            </li>
            <li>
              <span className='Results_Bullet'></span>Carolina Flyers{' '}
              <span>(National Champions 2021)</span>
            </li>
            <li>
              <span className='Results_Bullet'></span>Durham Toro{' '}
              <span>(National Contender 2017-2021)</span>
            </li>
          </ul>
        </div>
        <img src={DeanSled} alt='Dean Sled'></img>
      </div>
    </section>
  );
}

export default LandingPageResults;
