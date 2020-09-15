import { call, put, takeEvery } from "redux-saga/effects";
import * as Types from "../actions/types";

const baseUrl = "http://localhost:4000";

function GetDataFromServerToPost(apiPath, reqMethod, formBody) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formBody }),
  };

  return fetch(apiPath, requestOptions);
}

function* sendMail(action) {
  try {
    let formBody = {};
    formBody = action.message;
    const url = baseUrl + "/send";
    console.log(formBody);
    const response = yield call(GetDataFromServerToPost, url, "POST", formBody);
    const result = yield response.json();
    if (result.error) {
      yield put({
        type: Types.SEND_MAIL_SERVER_RESPONSE_ERROR,
        error: result.error,
      });
    } else {
      yield put({
        type: Types.SEND_MAIL_SERVER_RESPONSE_SUCCESS,
        result,
      });
    }
  } catch (error) {
    // yield put({ type: Types.SERVER_CALL_FAILED, error: error.message });
    console.log(error);
  }
}

export default function* rootSaga(params) {
  yield takeEvery(Types.SEND_MAIL, sendMail);
}
