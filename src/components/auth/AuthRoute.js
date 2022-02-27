/* eslint-disable */
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCurrentUser } from './user';
import { useEffect } from 'react';

const Redirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/login') //TODO: replace: true
  }, [])
  return <></>
}

const AuthRoute = ({ Component }) => getCurrentUser() ? Component : <Redirect />;

AuthRoute.propTypes = {
  Component: PropTypes.element.isRequired,
};

export default AuthRoute;
