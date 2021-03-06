import * as API from '../../api/reservations-api';

export const FETCH_RESERVATION = 'book-a-book/reservations/GET_RESERVATION';
export const ADD_RESERVATION = 'book-a-book/reservations/ADD_RESERVATION';
export const UPDATE_RESERVATION = 'book-a-book/reservations/UPDATE_RESERVATION';
export const DELETE_RESERVATION = 'book-a-book/reservations/DELETE_RESERVATION';
export const initialState = [];

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

export const fetchReservations = (userId) => async (dispatch) => {
  try {
    const reservations = await API.getAllReservations(userId);
    dispatch(getReservations(reservations));
    return true;
  } catch {
    return false;
  }
};

export const createReservation = (userId, reservation) => async (dispatch) => {
  try {
    const newReservation = await API.createNewReservation(userId, reservation);
    dispatch(addReservation(newReservation));
    return true;
  } catch {
    return false;
  }
};

export const deleteReservation = (userId, id) => async (dispatch) => {
  try {
    await API.deleteOneReservation(userId, id);
    dispatch(removeReservation(id));
    return true;
  } catch {
    return false;
  }
};

export const updateReservation = (reservation) => async (dispatch) => {
  try {
    const updatedReservation = await API.updateOneReservation(reservation);
    dispatch(changeReservation(updatedReservation));
    return true;
  } catch {
    return false;
  }
};

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESERVATION:
      return action.payload;
    case ADD_RESERVATION:
      return [...state, action.payload];
    case UPDATE_RESERVATION: {
      const filteredArray = state.filter((reservation) => reservation.id !== action.payload.id);
      return [...filteredArray, action.payload].sort((a, b) => a.id - b.id);
    }
    case DELETE_RESERVATION:
      return state.filter((reservation) => reservation.id !== action.payload);
    default:
      return state;
  }
};

export default reservationsReducer;
