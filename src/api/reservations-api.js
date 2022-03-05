import axios from 'axios';

const BASE_URL = 'https://book-a-book-api.herokuapp.com/api';

export const api = axios.create({
  baseURL: BASE_URL,
});

export const getAllReservations = async (userId) => {
  const response = await api.get(`/users/${userId}/reservations`);
  return response.data;
};

export const createNewReservation = async (userId, reservation) => {
  const response = await api.post(`/users/${userId}/reservations`, reservation);
  return response.data;
};

export const deleteOneReservation = async (userId, reservationId) => {
  const response = await api.delete(`/users/${userId}/reservations/${reservationId}`);
  return response.status === 204;
};

export const updateOneReservation = async (userId, reservation) => {
  const response = await api.put(`/users/${userId}/reservations`, reservation);
  return response.data;
};
