import styles from './Navbar.module.scss';

const Navbar = () => (
  <section className={styles.navbar}>
    <h1>Book A Book</h1>
    <ul className={styles.links}>
      <li><a href="/">BOOKS</a></li>
      <li><a href="/">MY RESERVATIONS</a></li>
      <li><a href="/">ADD BOOK</a></li>
      <li><a href="/">DELETE BOOK</a></li>
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
);

export default Navbar;
