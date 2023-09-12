import axios from 'axios';

export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('/register', userData);
    if (response.data) {
      dispatch({ type: 'REGISTER', payload: userData });
      alert('Registration successful');
    } else {
      alert('Registration failed');
    }
  } catch (error) {
    console.error('Registration error:', error);
    // alert('Registration error');
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('/login', userData);
    if (response.data) {
      dispatch({ type: 'LOGIN', payload: response.data });
      alert('Login successful');
    } else {
      alert('Wrong credentials');
    }
  } catch (error) {
    console.error('Login error:', error);
    // alert('Login error');
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch({ type: 'LOGOUT' });
};