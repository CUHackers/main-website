import { Link } from 'react-router-dom';
import { Link as Link2, animateScroll as scroll } from 'react-scroll';
import Homebutton from '../../Homebutton.js';
import Faqhome from '../../Faqhome.js';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import App from '../../App.js';


const Navbar = (props) => {


  const [where, changeWhere] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let locale = location.pathname;
    if (locale === "/faq" || locale === "/partners") {
      changeWhere(true);
      console.log(locale);
    } else {
      changeWhere(false);
    };
  }, [location]);

  function scrollHigher() {
    scroll.scrollToTop();
  };


  function linkUp() {
    return (
      <>
        {where ? "" : <Homebutton />}
        <Link2 className="navtag" to="about" spy={true} smooth={true}>About</Link2>
        <Link2 className="navtag" to="contact" spy={true} smooth={true}>Contact</Link2>
        {/* <div className="navtag"><a href="https://cuhackers.github.io/play/" target="_blank">Snake</a></div> */}
        <Link className="navtag faq" to="/faq">FAQ</Link>
        <Link className="navtag partners" to ="/partners">Partners </Link>
      </>
    )
  };

  return (
  <div style={{ maxHeight: props.nav }} id="navbar">
    {where ? <Faqhome /> : linkUp()}

  </div>
);
};

export default Navbar;
