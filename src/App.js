import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recommend from "./components/Recommend";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import scrollreveal from "scrollreveal";
import Aos from "aos";
import "aos/dist/aos.css"

export default function App() {
  // useEffect(() => {
  //   const sr = scrollreveal({
  //     origin: "top",
  //     distance: "80px",
  //     duration: 2000,
  //     reset: true,
  //   });
  //   sr.reveal(
  //     `
  //       nav,
  //       #hero,
  //       #services,
  //       #recommend,
  //       #testimonials,
  //       footer
  //       `,
  //     {
  //       opacity: 0,
  //       interval: 300,
  //     }
  //   );
  // }, []);
  useEffect (()=>{
Aos.init({duration:2000});    
  }, [])
  return (
    <div>
      {/* <ScrollToTop /> */}
      <Navbar />
      <Hero />
      <Services />
      <Recommend />
      <Testimonials />
      <Footer />
    </div>
  );
}
