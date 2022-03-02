import { useLocation } from 'react-router-dom';
import styles from './errors.module.scss';

const Error404 = () => {
  const location = useLocation();
  return (
    <p className={styles.error}>
      <span>[404 Error] Path</span>
      <span>{location.pathname}</span>
      <span>does not exist</span>
    </p>
  );
};

export default Error404;
