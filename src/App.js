import '@atlaskit/css-reset/dist/bundle.css';
import './App.css';
import Footer from './_components/_common/Footer';
import Header from './_components/_common/Header';
import Banner from './_components/_views/Banner';
import Benefits from './_components/_views/Benefits';
import BookDemo from './_components/_views/BookDemo';
import ContactUs from './_components/_views/ContactUs';
import Features from './_components/_views/Features';
import MidContent from './_components/_views/MidContent';
 
 
function App() {
  return (
       <>
            <Header />
            <Banner />
            <Features />
            <BookDemo />
            <Benefits />
            <MidContent />
            <ContactUs /> 
            <Footer />
       </>
  );
}

export default App;
