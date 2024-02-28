import './Partners.scss';
import aws_logo from './new/AWS_Logo.png';
import ge from './new/ge_monogram_dark gray_432.png';
import partnerdevice from './new/cactus.png';
import GiantOak from "./new/Giant Oak.png"
import Postman from "./new/postman.svg";
import SoC from "./new/SoC-Orange-and-Purple.png"
import logo_watt from './new/Watt.png';
import rtx from "./new/rtx_logo.png";
import deloitte from "./new/deloitte.png";

ge ? console.log(ge): console.log("no dice");

function Partners() {
  return (
    <div id="partner">
      <div className="innerpartner">
        <div id="partnerdevice" style={{backgroundImage: `url(${partnerdevice})`}}></div>
        <div className="partnertextbody">
          <h2 className="partnerhead">in partnership with</h2>
          <div className="thepartner">
            <a href="https://aws.amazon.com/" target="_blank"><div><img src={aws_logo} alt="AWS Logo"/></div></a>
            <a href="https://www.clemson.edu/centers-institutes/watt/" target="_blank"><div><img src={logo_watt} alt="Watt Family Innovation Center Logo"/></div></a>
            <a href="https://www.clemson.edu/cecas/departments/computing/" target="_blank"><div><img src={SoC} alt="Clemson University School of Computing Logo"/></div></a>
            <a href="https://www.giantoak.com" target="_blank"><div><img src={GiantOak} alt="Giant Oak Logo"/></div></a>
            <a href="https://www.rtx.com/" target="_blank"><div><img src={rtx} alt="Raytheon Logo"/></div></a>
            <a href="https://www2.deloitte.com/us/en.html" target="_blank"><div><img src={deloitte} alt="Deloitte Logo"/></div></a>
            {/* <a href="https://www.clemson.edu/cecas/departments/computing/index.html" target="_blank"><div><img src={SoC} alt="Clemson School of Computing Logo"/></div></a> */}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Partners;
