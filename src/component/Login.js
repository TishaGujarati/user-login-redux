import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/userActions';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateForm = () => {
    if (!username || !password) {
      alert("Both username and password are required");
      return false;
    }
    return true;
  };

const login = async () => {

  if(!validateForm()){
    return    
  }
  
  const userData = { username, password };
  try {
    await dispatch(loginUser(userData));
    console.log('Login successful');
    navigate('/');
  } catch (error) {
    alert('Invalid username or password');
  }
};
  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={login}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;