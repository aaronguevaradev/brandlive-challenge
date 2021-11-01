import React, {
  createContext,
  useReducer,
  useEffect,
  useCallback,
} from "react";
import { setLocalStorage } from "../lib/storage";
import socket from "socket.io-client";
import settings from "../data/settings";

export const SessionContext = createContext();

const ADD_MESSAGE = "ADD MESSAGE";

const sessionReducer = (state, action) => {
  if (action.type === ADD_MESSAGE) {
    return [{ ...action.payload }, ...state];
  }
  return state;
};

export const SessionProvider = ({ children }) => {
  const [messages, dispatch] = useReducer(sessionReducer, []);

  const addMessage = useCallback(
    ({ message }) => {
      dispatch({
        type: ADD_MESSAGE,
        payload: {
          message,
        },
      });
    },
    [dispatch]
  );

  //const values = { messages, addMessage }

  useEffect(() => {
    const connection = socket.connect(settings.Host);
    const channel = settings.Room;

    connection.on("connect", () => {
      connection.emit("join-channel", channel);
    });

    connection.on("error", (e) => {
      console.error(e);
    });

    connection.on("message", (message) => {
      console.log("MESSAGE RECEIVED", message);
    });

    setLocalStorage(settings.StorageMessageKey, messages);
    return () => {};
  }, [messages]);

  return (
    <SessionContext.Provider value={{ messages, addMessage }}>
      {children}
    </SessionContext.Provider>
  );
};
