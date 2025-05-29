import Header from './components/Header';
import SecondaryHeader from './components/SecondaryHeader';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ShowroomSection from './components/ShowroomSection';
import Footer from './components/Footer';
import Brand from './components/Brand';
import TrustpilotSection from './components/TrustpilotSection';
function App() {
  

  return (
    <div >
      <Header/>
      {/* <SecondaryHeader /> */}
      <HeroSection />
      <Brand/>
      <TrustpilotSection/>

      <ShowroomSection/>
      <AboutSection/>
      
      <Footer/>

    </div>
  )
}

export default App
