import { FaTwitter, FaEnvelope } from "react-icons/fa";
import logo from "../resources/Nutraiplanlogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <nav className='navbar'>
      <div className='navbarLogo' onClick={refreshPage}>
        <img src={logo} alt='logo' className='headerLogo' />
      </div>
      <div className='navbarItems'>
        <Link
          to='https://twitter.com/BenTech1_'
          target='_blank'
          rel='noopener noreferrer'>
          <li className='navabarItem'>
            <FaTwitter className='Icon' />
          </li>
        </Link>
        <a href='mailto:nutriplanai@outlook.com?subject=Feedback%20on%20NutriPlan&body=Hi%20there%2C%20I%20wanted%20to%20provide%20some%20feedback%20on%20NutriPlan...'>
          <li className='navabarItem'>
            <FaEnvelope className='Icon' />
          </li>
        </a>
      </div>
    </nav>
  );
};

export default Header;
