import styles from './Navbar.module.scss';

const Navbar = () => (
  <section className={styles.navbar}>
    <section>Navbar</section>
    <ul className="links">
      <li>BOOKS</li>
      <li>LIFESTYLE</li>
      <li>SHOP</li>
      <li>TEST DRIVE</li>
    </ul>
    <section>
      <ul className="social-icons">
        <i className="" />
        <i className="" />
        <i className="" />
        <i className="" />
      </ul>
      <p className="copyright">
        &copy; 2015
      </p>
    </section>
  </section>
);

export default Navbar;
