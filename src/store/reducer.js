import { actionTypes } from "./actionTypes";

const initialState = {
  orgList: [],
  activeOrg: {},
  activeUser: {},
  activeFollowers: [],
  activeFollowing: []
};

export const reducer = (state = initialState, action) => {
  const {
    SET_ORG,
    SET_USER,
    SET_LIST,
    SET_FOLLOWERS,
    SET_FOLLOWING
  } = actionTypes;
  const {
    orgList,
    activeOrg,
    activeUser,
    activeFollowers,
    activeFollowing,
    type
  } = action;

  switch (type) {
    case SET_LIST:
      return { ...state, orgList };
    case SET_ORG:
      return { ...state, activeOrg };
    case SET_USER:
      return { ...state, activeUser };
    case SET_FOLLOWERS:
      return { ...state, activeFollowers };
    case SET_FOLLOWING:
      return { ...state, activeFollowing };
    default:
      return state;
  }
};
