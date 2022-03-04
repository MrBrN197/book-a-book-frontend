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

  const closeModal = () => {
    setNavbarOpen(false);
  };

  const links = [
    ['BOOKS', '/books'],
    ['MY RESERVATIONS', '/reservations'],
    ['ADD BOOK', '/books/new'],
    ['DELETE BOOK', '/books/remove'],
    ['RESERVE BOOK', 'reservations/new'],
  ];

  return (
    <div className={styles.App}>
      <section className={styles.navbar}>
        <GiHamburgerMenu className={`${styles.navicon} mobile-only`} role="button" onClick={toggleNavbar} />
        <Link to="/"><h1>Book A Book</h1></Link>
        <ul className={`${styles.links} ${navbarOpen ? styles.open : ''}`}>
          <IoMdClose onClick={toggleNavbar} className={`${styles.navicon} mobile-only`} />
          {links.map(([text, link]) => (
            <li key={text}><Link to={link} onClick={closeModal}>{text}</Link></li>
          ))}
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
