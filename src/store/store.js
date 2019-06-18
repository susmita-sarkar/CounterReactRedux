import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { changeCounter } from "../reducers/counter";

export const createMystore = () =>
  createStore(changeCounter, applyMiddleware(logger));
