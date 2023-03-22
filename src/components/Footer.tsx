import { FaTwitter, FaEnvelope } from "react-icons/fa";
import logo from "../resources/Nutraiplanlogo.png";
import { Link } from "react-router-dom";

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
        <Link
          to='https://twitter.com/BenTech1_'
          target='_blank'
          rel='noopener noreferrer'>
          <li className='navabarItem'>
            <FaTwitter className='Icon' />
          </li>
        </Link>
        <a
          href='mailto:nutriplanai@outlook.com?subject=Feedback%20on%20NutriPlan&body=Hi%20there%2C%20I%20wanted%20to%20provide%20some%20feedback%20on%20NutriPlan...'
          target='_blank'
          rel='noopener noreferrer'>
          <li className='navabarItem'>
            <FaEnvelope className='Icon' />
          </li>
        </a>
      </div>
      <p className='FooterText' style={{ color: "gray", fontSize: "12px" }}>
        Copyright © 2022 Nutraiplan
      </p>
    </div>
  );
};

export default Footer;
