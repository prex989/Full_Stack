import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL || '/api/v1';

const AUTH_URL = API_URL + "/auth";

export const handleLogin = async (email, password) => {

  const data = { email, password };

  const response = await axios.post(AUTH_URL + '/login', data);
  const jsonResponse = response.data;

  if (jsonResponse.error)
    throw jsonResponse.error;

  const body = jsonResponse.body;
  const { token } = body;

  if (!token)
    throw "Token is required in the login";

  saveToken(token);



  return {
    success: jsonResponse.message
  }
}

export const handleRegister = async (userData) => {

  // console.log(userData);
  const response = await axios.post(AUTH_URL + "/register", userData);
  const jsonResponse = response.data;

  if (jsonResponse.error)
    throw jsonResponse.error;

  return {
    success: jsonResponse.message
  }
}


export const saveToken = (token) => {
  localStorage.setItem('token', token);
}

export const getToken = () => {
  localStorage.getItem('token');
}
