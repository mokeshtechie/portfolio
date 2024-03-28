
import './App.css';
import Header from "./component/header/header"
import Hero from './component/UI/hero';
import Service from './component/UI/service';
import Portfolio from './component/portfolio/portfolio';
import Contact from './component/contact/contact';
import Footer from "./component/footer/footer"
function App() {
  return (
    <div className="text-indigo-600 text-2xl font-[500]">
     <Header/>
     <Hero/>
     <Service/>
     <Portfolio/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
