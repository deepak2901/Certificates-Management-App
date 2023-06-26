import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    throw new Error(`Error while signing up: ${error.response.data}`);
  }
};

export const signin = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signin`, userData);
    return response.data;
  } catch (error) {
    throw new Error(`Error while logging in: ${error.response.data}`);
  }
};

export const forgetpassword = async (userData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/forget-password`,
      userData
    );
    return response.data;
  } catch (error) {
    throw new Error(`Error while logging in: ${error.response.data}`);
  }
};
