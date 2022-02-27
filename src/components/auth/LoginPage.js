// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
import { setCurrentUser } from './user';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentUser({ id: null });
    console.log('navigating');
    navigate('/', { state: { flash: { notice: 'Logged in Succesfully' } } });
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <label htmlFor="username">
        <input type="text" name="username" id="username" placeholder="username" required autoComplete="off" />
      </label>
      <input className="btn-primary" type="submit" value="Login" />
      <span className="small">dont have an account</span>
      <input className="btn" type="submit" value="Create account" />
    </form>
  );
};

export default LoginPage;
