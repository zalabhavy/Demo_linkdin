// reducer.js
import {
    SET_USER_DATA,
    TOGGLE_BIO_EDIT,
    TOGGLE_EXPERIENCE_EDIT,
    UPDATE_BIO,
    ADD_EXPERIENCE,
    UPDATE_EXPERIENCE
  } from './action.js';

  const initialState = {
    name: "",
    bio: "",
    experiences: [],
    education: ["Computer Science"],
    skills: ["React", "JavaScript", "CSS"],
    picture: "",
    isEditingBio: false,
    isEditingExperience: false
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_USER_DATA:
        return { ...state, ...action.payload };
      case TOGGLE_BIO_EDIT:
        return { ...state, isEditingBio: !state.isEditingBio };
      case TOGGLE_EXPERIENCE_EDIT:
        return { ...state, isEditingExperience: !state.isEditingExperience };
      case UPDATE_BIO:
        return { ...state, bio: action.payload };
      case ADD_EXPERIENCE:
        return {
          ...state,
          experiences: [...state.experiences, { title: "", company: "", duration: "" }]
        };
      case UPDATE_EXPERIENCE:
        const updatedExperiences = [...state.experiences];
        updatedExperiences[action.payload.index][action.payload.field] = action.payload.value;
        return { ...state, experiences: updatedExperiences };
      default:
        return state;
    }
  };
  
  export default userReducer;
  