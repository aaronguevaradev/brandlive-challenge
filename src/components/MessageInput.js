import React, { useContext, useState,useEffect } from "react";
import settings from "../data/settings";
import socket from "socket.io-client";

import "./MessageInput.scss";
import Button from "@mui/material/Button";

import { SessionContext } from "../contexts/session";
import { getLocalStorage } from "../lib/storage";

function MessageInput() {

  const [message, setMessage] = useState("");
  const { addMessage } = React.useContext(SessionContext);
  const [userNow, setUserNow] = useState(() => {
    // getting stored value
    const saved = getLocalStorage(settings.StorageUsernameKey);
    const initialValue = saved;
    return initialValue || "";
  });

  const handleChange = event => {
    event.preventDefault();
    const connection = socket.connect(settings.Host);
		const channel = settings.Room;
    connection.on('connect', () => {
        connection.emit('join-channel', channel);
        connection.emit('message', { 
            someMessage: message 
        }, channel); 
    });
    
    connection.on('error', (e) => { 
        console.error(e);
    });
    
    addMessage({ message });
  };

  
  return (
    <div>
    { userNow!="" &&
        <form className="message-input" onSubmit={handleChange}>
          <input
            autoFocus
            value={message}
            type="text"
            name="message"
            onChange={event => setMessage(event.target.value)}
            id="message"
          />
          <Button variant="contained" color="primary" type="submit">
            Send
          </Button>
        </form>}
            </div>
  );
}

export default MessageInput;
