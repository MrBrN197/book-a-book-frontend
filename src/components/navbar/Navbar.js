import { Link, Outlet } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import styles from './Navbar.module.scss';
import '../index.scss';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const toggleNavbar = () => {
    setNavbarOpen((s) => !s);
  };

  return (
    <div className={styles.App}>
      <section className={styles.navbar}>
        <GiHamburgerMenu className={`${styles.navicon} mobile-only`} role="button" onClick={toggleNavbar} />
        <Link to="/"><h1>Book A Book</h1></Link>
        <ul className={`${styles.links} ${navbarOpen ? styles.open : ''}`}>
          <IoMdClose onClick={toggleNavbar} className={`${styles.navicon} mobile-only`} />
          <li><Link to="/books">BOOKS</Link></li>
          <li><Link to="/reservations">MY RESERVATIONS</Link></li>
          <li><Link to="/books/new">ADD BOOK</Link></li>
          <li><Link to="/books/remove">DELETE BOOK</Link></li>
          <li><Link to="/reservations/new">RESERVE BOOK</Link></li>
        </ul>
        <section className="desktop-only">
          <ul className={styles.social}>
            <i className="" />
            <i className="" />
            <i className="" />
            <i className="" />
          </ul>
          <span className={styles.copyright}>
            &copy; 2015 Copyright
          </span>
        </section>
      </section>
      <Outlet />
    </div>
  );
};

export default Navbar;
