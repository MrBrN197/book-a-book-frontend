import PropTypes from 'prop-types';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import styles from './BookView.module.scss';

const BookView = ({
  title,
  author,
  image,
}) => (
  <div className={styles.book}>
    <div className={styles.image}>
      <img src={image} alt={title} />
    </div>
    <div className={styles.details}>
      <h1>{title}</h1>
      <p>{author}</p>
      <div className={styles.social}>
        <div className={styles.icon}><FaFacebookF /></div>
        <div className={styles.icon}><FaTwitter /></div>
        <div className={styles.icon}><FaInstagram /></div>
      </div>
    </div>
  </div>
);

BookView.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default BookView;
