import { Link, Outlet } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar = () => (
  <div className={styles.App}>
    <section className={styles.navbar}>
      <Link to="/"><h1>Book A Book</h1></Link>
      <ul className={styles.links}>
        <li><Link to="/books">BOOKS</Link></li>
        <li><Link to="/reservations">MY RESERVATIONS</Link></li>
        <li><Link to="/books/new">ADD BOOK</Link></li>
        <li><Link to="/books/remove">DELETE BOOK</Link></li>
        <li><Link to="/reservations/new">RESERVE BOOK</Link></li>
      </ul>
      <section>
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

export default Navbar;
