import { call, put, takeEvery } from "redux-saga/effects";
import * as Types from "../actions/types";

const baseUrl = "https://yashadesignstudioserver.herokuapp.com";

function GetDataFromServerToPost(apiPath, reqMethod, formBody) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Access-Control-Allow-Origin",
    "https://yashadesignstudioserver.herokuapp.com"
  );
  console.log(myHeaders);
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(formBody),
  };

  return fetch(apiPath, requestOptions);
}

function* sendMail(action) {
  try {
    let formBody = {};
    formBody.name = action.message.name;
    formBody.email = action.message.email;
    formBody.subject = action.message.subject;
    formBody.message = action.message.message;

    const url = baseUrl + "/send";
    console.log(formBody);
    console.log(typeof formBody);
    const response = yield call(GetDataFromServerToPost, url, "POST", formBody);
    const result = yield response.json();
    console.log(result);
    if (result.error) {
      yield put({
        type: Types.SEND_MAIL_SERVER_RESPONSE_ERROR,
        result,
      });
    } else {
      yield put({
        type: Types.SEND_MAIL_SERVER_RESPONSE_SUCCESS,
        result,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* rootSaga(params) {
  yield takeEvery(Types.SEND_MAIL, sendMail);
}
