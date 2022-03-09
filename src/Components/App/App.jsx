import './App.css';
import Nav from '../Nav/Nav';
import Hero from '../Hero/Hero';
import LandingPageDescription from '../LandingPageDescription/LandingPageDescription';
import LandingPageWhatWeDo from '../LandingPageWhatWeDo/LandingPageWhatWeDo';
import LandingPageResults from '../LandingPageResults/LandingPageResults';
import LandingPageMission from '../LandingPageMission/LandingPageMission';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Hero></Hero>
      <LandingPageDescription></LandingPageDescription>
      <LandingPageWhatWeDo></LandingPageWhatWeDo>
      <LandingPageResults></LandingPageResults>
      <LandingPageMission></LandingPageMission>
      <Footer></Footer>
    </div>
  );
}

export default App;
