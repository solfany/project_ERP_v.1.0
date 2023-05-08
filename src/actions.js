export const SET_USER = 'SET_USER';
export const SET_INIT = 'SET_INIT';
export const UPDATE_USER = 'UPDATE_USER';

export function setUserAction(userObj) {
  return { type: SET_USER, payload: userObj };
}

export function setInitAction(init) {
  return { type: SET_INIT, payload: init };
}

export const updateUser = (userObj) => ({
  type: UPDATE_USER,
  payload: userObj,
});
