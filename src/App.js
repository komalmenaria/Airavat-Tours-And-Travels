
import {} from "./Css/Styles.css";
import React , {Suspense , lazy} from "react";
import { BrowserRouter as Router,Routes , Route } from "react-router-dom";

import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Loader from "./Component/Loader";
import ScrollButton from "./Component/ScrollButton";

const Home  = lazy(()=> import("./Component/Home"))
const About = lazy(()=> import( "./Component/About"))
const Contact = lazy(()=> import( "./Component/ContuctUs"))
const Subscription = lazy(()=> import( "./Component/Subscription"))
const Packages = lazy(()=> import( "./Component/Packages"))




function App() {
  return (
    <Router>
      <Header />
      < Suspense  fallback={ <Loader /> } >
      <ScrollButton />
      <Routes  >
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact /> 
        <Route path="/packages" element={<Packages />} exact /> 
        <Route path="/contactus" element={<Contact />} exact />  
      </Routes >
      <Subscription />
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
