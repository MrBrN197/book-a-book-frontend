const context = {
  user: null,
  token: null,
};

export const setAuthToken = (token) => {
  localStorage.setItem('token', token);
  context.token = token;
};

export const setCurrentUser = (user) => {
  context.user = user;
};

export const getCurrentUser = () => context.user;
