import { actionTypes } from "./actionTypes";

const initialState = {
  orgList: [],
  activeOrg: {},
  activeUser: {}
};

export const reducer = (state = initialState, action) => {
  const { SET_ORG, SET_USER, SET_LIST } = actionTypes;
  const { orgList, activeOrg, activeUser, type } = action;

  switch (type) {
    case SET_LIST:
      return { ...state, orgList };
    case SET_ORG:
      return { ...state, activeOrg };
    case SET_USER:
      return { ...state, activeUser };
    default:
      return state;
  }
};
