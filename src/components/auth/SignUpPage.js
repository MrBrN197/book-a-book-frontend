import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
import { useCurrentUser, setCurrentUser } from './user';

const SignUpPage = () => {
  const navigate = useNavigate();
  const user = useCurrentUser();

  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (user) {
      navigate('/', { state: { flash: 'already logged in' } });
    }
  }, [navigate, user]);

  const handleSubmit = async (e) => {
    if (loading) return;
    setLoading(true);
    e.preventDefault();
    const signUp = () => axios.post(
      'https://book-a-book-api.herokuapp.com/sign_up',
      { username },
    ).then((resp) => {
      const { data } = resp;
      setCurrentUser(data.user, data.token);
      navigate('/', { state: { flash: { notice: 'Created account Succesfully!' } } });
    }).catch((err) => {
      setErrors(err.response.data.errors);
    });
    await signUp();
    setLoading(false);
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
        <input disabled={loading} className={styles['btn-primary']} type="submit" value="Create Account" />
      </form>
    </div>
  );
};

export default SignUpPage;
