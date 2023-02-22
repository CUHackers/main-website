import './Contact.scss';
import contactdevice from './binch.png';

function Contact() {

  return (
    <div id="contact" className="text">
      <div id="contactdevice">
        <img src={contactdevice} alt="bench" />
      </div>
      <div className="contacttextbody">
        <div className="linkWrapper">
            <div id="socials">
              <a className="social" href="https://twitter.com/cuhackit?lang=en"><i id="socialIcon" className="fa fa-twitter" aria-hidden="true"></i></a>
              <a className="social" href="https://www.instagram.com/cuhackit/?hl=en"><i id="socialIcon" className="fa fa-instagram" aria-hidden="true"></i></a>
              <a className="social" href="https://www.facebook.com/CUhackers/"><i id="socialIcon" className="fa fa-facebook" aria-hidden="true"></i></a>
              <a className="social" href="mailto:cuhackers@g.clemson.edu" style={{marginTop:"10px"}}><i className="fa fa-envelope" aria-hidden="true"></i></a>
            </div>
        </div>
        <h3>Contact</h3>
      </div>
    </div>
  );
}


export default Contact;
