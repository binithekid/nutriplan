import { FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../resources/Nutriplanlogo.png";

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
        <li className='navabarItem'>
          <FaTwitter className='Icon' />
        </li>
        <li className='navabarItem'>
          <FaInstagram className='Icon' />
        </li>
      </div>
    </nav>
  );
};

export default Header;
