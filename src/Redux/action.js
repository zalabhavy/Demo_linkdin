// action.js
export const SET_USER_DATA = 'SET_USER_DATA';
export const TOGGLE_BIO_EDIT = 'TOGGLE_BIO_EDIT';
export const TOGGLE_EXPERIENCE_EDIT = 'TOGGLE_EXPERIENCE_EDIT';
export const UPDATE_BIO = 'UPDATE_BIO';
export const ADD_EXPERIENCE = 'ADD_EXPERIENCE';
export const UPDATE_EXPERIENCE = 'UPDATE_EXPERIENCE';

// Action creators
export const setUserData = (userData) => ({
  type: SET_USER_DATA,
  payload: userData,
});

export const toggleBioEdit = () => ({
    type: TOGGLE_BIO_EDIT,
  });

export const toggleExperienceEdit = () => ({
  type: TOGGLE_EXPERIENCE_EDIT,
});

export const updateBio = (bio) => ({
  type: UPDATE_BIO,
  payload: bio,
});

export const addExperience = () => ({
  type: ADD_EXPERIENCE,
});

export const updateExperience = (index, field, value) => ({
  type: UPDATE_EXPERIENCE,
  payload: { index, field, value },
});
