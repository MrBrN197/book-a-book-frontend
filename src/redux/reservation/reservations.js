import * as API from '../../api/reservations-api';

const FETCH_RESERVATION = 'book-a-book/reservations/GET_RESERVATION';
const ADD_RESERVATION = 'book-a-book/reservations/ADD_RESERVATION';
const UPDATE_RESERVATION = 'book-a-book/reservations/UPDATE_RESERVATION';
const DELETE_RESERVATION = 'book-a-book/reservations/DELETE_RESERVATION';
const initialState = [];

const getReservations = (reservations) => ({
  type: FETCH_RESERVATION,
  payload: reservations.data,
});

const addReservation = (reservation) => ({
  type: ADD_RESERVATION,
  payload: reservation.data,
});

const removeReservation = (id) => ({
  type: DELETE_RESERVATION,
  payload: id,
});

const changeReservation = (reservation) => ({
  type: UPDATE_RESERVATION,
  payload: reservation.data,
});

export const fetchReservations = () => async (dispatch) => {
  const reservations = await API.getAllReservations();
  dispatch(getReservations(reservations));
};

export const createReservation = (userId, reservation) => async (dispatch) => {
  const newReservation = await API.createNewReservation(userId, reservation);
  dispatch(addReservation(newReservation));
};

export const deleteReservation = (id) => async (dispatch) => {
  await API.deleteOneReservation(id);
  dispatch(removeReservation(id));
};

export const updateReservation = (reservation) => async (dispatch) => {
  const updatedReservation = await API.updateOneReservation(reservation);
  dispatch(changeReservation(updatedReservation));
};

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESERVATION:
      return action.payload;
    case ADD_RESERVATION:
      return [...state, action.payload];
    case UPDATE_RESERVATION: {
      const filteredArray = state.filter((reservation) => reservation.id !== action.payload.id);
      return [...filteredArray, action.payload];
    }
    case DELETE_RESERVATION:
      return state.filter((reservation) => reservation.id !== action.payload);
    default:
      return state;
  }
};

export default reservationsReducer;
