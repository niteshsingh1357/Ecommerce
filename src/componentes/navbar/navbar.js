import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-success fixed-top'>
        <NavLink className='navbar-brand' to='#'>
          Navbar
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto ml-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to='#'>
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item dropdown'>
              <Link
                className='nav-link dropdown-toggle'
                to='#'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Catogories
              </Link>
              <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <Link className='dropdown-item' to='/catogories'>
                  Action
                </Link>
                <NavLink className='dropdown-item' to='/catogories'>
                  Another action
                </NavLink>
                <div className='dropdown-divider'></div>
                <Link className='dropdown-item' to='#'>
                  Something else here
                </Link>
              </div>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='#'>
                All Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='#'>
                About Us
              </Link>
            </li>{" "}
            <li className='nav-item'>
              <Link className='nav-link' to='#'>
                Contact
              </Link>
            </li>
          </ul>
          <form className='form-inline my-2 my-lg-0'>
            <div className='input-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Search Food...'
              />
              <div className='input-group-append'>
                <button className='btn btn-secondary' type='button'>
                  <FontAwesomeIcon icon={faSearch} />{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
