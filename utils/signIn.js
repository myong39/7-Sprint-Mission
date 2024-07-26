import axios from '@/lib/axios';

export const SignIn = async (email, password) => {
  try {
    const response = await axios.post('/auth/SignIn', {
      email,
      password,
    });
    const { accessToken } = response.data;
    localStorage.setItem('accessToken', accessToken);
    return accessToken;
  } catch (error) {
    console.error('Failed to SignIn:', error);
    console.error(
      'Error details:',
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};

export const isLoggedIn = () => {
  return !!getAccessToken();
};

export const logout = () => {
  localStorage.removeItem('accessToken');
};
