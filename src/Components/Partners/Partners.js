import './Partners.scss';
import partnersContent from './partners.json';
//import faqbg from './faqbg2.png';

function Partners() {

    const partnersArray = Array.from(partnersContent);
  
    const partnersMap = partnersArray.map((question, index) =>
      <div className="question">
        <div className="questionq">{question.question}</div>
        <div className="questiona">{question.answer}</div>
      </div>
    );
  
    return(
      <div id="faq" >
        <div className="partnersBody">
          <h2 className="partnersHead">Interested in partnering with CUHackit?</h2>
          <div id="partnersBlock">
            {partnersMap}
          </div>
        </div>
      </div>
    )
  };
  
  export default Partners;