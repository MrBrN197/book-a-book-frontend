import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useCurrentUser } from './user';

const Redirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/login'); // TODO: replace: true
  }, [navigate]);
  return <></>;
};

const AuthRoute = ({ Component }) => {
  const userState = useCurrentUser();

  if (userState === null) return <div>Loading...</div>;
  if (userState) {
    return Component;
  }
  return <Redirect />;
};

AuthRoute.propTypes = {
  Component: PropTypes.element.isRequired,
};

export default AuthRoute;
