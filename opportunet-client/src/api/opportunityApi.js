import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/opportunities';

export const getOpportunities = async (filters = {}) => {
  const response = await axios.get(API_URL, { params: filters });
  return response.data;
};

export const createOpportunity = async (data) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};

export const updateOpportunity = async (id, data) => {
  const response = await axios.put(`${API_URL}/${id}`, data);
  return response.data;
};

export const deleteOpportunity = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
