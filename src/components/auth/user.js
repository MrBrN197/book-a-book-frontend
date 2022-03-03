import axios from 'axios';
import { useEffect, useState } from 'react';

const context = {
  user: null,
};

const TOKEN_NAME = '_token';

const setAuthToken = (token) => {
  localStorage.setItem(TOKEN_NAME, token);
};

const getAuthToken = () => localStorage.getItem(TOKEN_NAME);

export const setCurrentUser = (user, token) => {
  if (token) setAuthToken(token);
  context.user = user;
};

export const getCurrentUser = () => context.user;

export const useCurrentUser = () => {
  const [user, setUser] = useState(null);
  const token = getAuthToken();

  useEffect(() => {
    const authorizeUser = async () => {
      const instance = axios.create({
        baseURL: 'https://book-a-book-api.herokuapp.com',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const resp = await instance.post('token');
      if (resp.status !== 200) throw new Error('dsfdasfsd');
      const { data: { user: cUser } } = resp;
      setCurrentUser(cUser);
      setUser(cUser);
    };

    if (!token) {
      setUser(false);
      return;
    }

    if (context.user) {
      setUser(context.user);
    } else {
      authorizeUser();
    }
  }, [token]);

  return user;
};
