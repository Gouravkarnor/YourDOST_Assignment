import axiosInstance from "./axiosInstance";

const API_KEY = process.env.REACT_APP_API_KEY;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchUsers = async (page = 1) => {
  const apiRequest = axiosInstance.get(
    `/users?page=${page}&api_key=${API_KEY}`
  );

  const delayRequest = delay(250);
  const [response] = await Promise.all([apiRequest, delayRequest]);

  return response.data;
};
