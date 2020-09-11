import * as Types from "./types";

export const sendMail = (message) => {
  return {
    type: Types.SEND_MAIL,
    message,
  };
};
