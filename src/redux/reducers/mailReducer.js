import * as Types from "../actions/types";

const initialUserObj = {
  message: "",
};

const handleMailServerResponse = (state, action) => {
  let newState = { ...state };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, {
      message: action.result,
    });
  }
  return { ...newState };
};

export default (state = initialUserObj, action = {}) => {
  switch (action.type) {
    case Types.SEND_MAIL_SERVER_RESPONSE_SUCCESS:
      return handleMailServerResponse(state);
    case Types.SEND_MAIL_SERVER_RESPONSE_ERROR:
      return handleMailServerResponse(state);
    default:
      return {
        ...state,
      };
  }
};
