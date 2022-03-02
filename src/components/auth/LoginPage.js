/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
import { useCurrentUser, setCurrentUser } from './user';

const LoginPage = () => {
  const navigate = useNavigate();
  const user = useCurrentUser();

  useEffect(() => {
    if (user) {
      navigate('/', { state: { flash: 'already logged in' } });
    }
  }, [navigate, user]);

  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post(
      'https://book-a-book-api.herokuapp.com/login',
      { username },
    ).then((resp) => {
      const { data } = resp;
      setCurrentUser(data.user, data.token);
      navigate('/', { state: { flash: { notice: 'Logged in Succesfully' } } });
    }).catch((err) => {
      setErrors(err.response.data.errors);
    });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        {errors.length > 0 && (
        <div className={styles.error}>
          { errors.map((e) => <span key={e}>{e.message}</span>) }
        </div>
        )}
        <label htmlFor="username">
          <span>Username</span>
          <input type="text" onChange={(e) => setUsername(e.target.value)} name="username" id="username" required autoComplete="off" value={username} />
        </label>
        <input className={styles['btn-primary']} type="submit" value="Login" />
        <div className={styles.text_small}>
          Dont have an account?
          <Link to="/sign_up">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
