import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import OpenAIContentScript from "./OpenAIContentScript";
import SharedWrapper from "./SharedWrapper";

export default function OpenAIContentScriptApp() {
  return (
    <Provider store={store}>
      <SharedWrapper>
        <OpenAIContentScript></OpenAIContentScript>
      </SharedWrapper>
    </Provider>
  );
}
