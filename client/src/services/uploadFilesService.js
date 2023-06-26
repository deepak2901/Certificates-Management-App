import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const uploadFile = async (file) => {
  try {
    const formData = new FormData();
    formData.append("filename", file);

    const response = await axios.post(`${API_BASE_URL}/uploadfiles`, formData);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchFiles = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/files`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
