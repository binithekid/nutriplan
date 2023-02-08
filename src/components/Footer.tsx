import { FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../resources/Nutriplanlogo.png";

const Footer = () => {
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div className='FooterDiv'>
      <div className='FooterLogoContainer' onClick={refreshPage}>
        <img src={logo} alt='logo' className='footerLogo' />
      </div>
      <p className='FooterText'>
        Discover delicious and nutritious meal plans tailored to your needs!
      </p>
      <div className='FooterSocial'>
        <FaTwitter className='Icon' />
        <FaInstagram className='Icon' />
      </div>
      <p className='FooterText' style={{ color: "gray", fontSize: "12px" }}>
        Copyright © 2022 Nutriplan
      </p>
    </div>
  );
};

export default Footer;
