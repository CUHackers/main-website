import './Partners.scss';
import logo from './SoCLogo.png';
import aws_logo from './new/AWS_Logo.png';
import ge from './new/ge_monogram_dark gray_432.png';
import partnerdevice from './new/cactus.png';
import LPL from "./new/LPL.png";
import Postman from "./new/postman.svg";
import logo_watt from './logo_watt.png';

ge ? console.log(ge): console.log("no dice");

function Partners() {
  return (
    <div id="partner">
      <div className="innerpartner">
        <div id="partnerdevice" style={{backgroundImage: `url(${partnerdevice})`}}></div>
        <div className="partnertextbody">
          <h2 className="partnerhead">in partnership with</h2>
          <div className="thepartner">
            <a href="https://www.clemson.edu/cecas/departments/computing/" target="_blank"><div><img src={logo} alt="Clemson University School of Computing Logo"/></div></a>
            <a href="https://www.clemson.edu/centers-institutes/watt/" target="_blank"><div><img src={logo_watt} alt="Watt Family Innovation Center Logo"/></div></a>
            <a href="https://aws.amazon.com/" target="_blank"><div><img src={aws_logo} alt="AWS Logo"/></div></a>
            <a href="https://www.lpl.com" target="_blank"><div><img src={LPL} alt="LPL Logo"/></div></a>
            <a href="https://www.postman.com" target="_blank"><div><img src={Postman} alt="Postman Logo"/></div></a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Partners;
