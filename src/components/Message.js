import React, { useState, useEffect } from 'react';
import './Message.scss';
import { SessionContext } from "../contexts/session";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import { getLocalStorage } from "../lib/storage";


function Message() {
    const { messages } = React.useContext(SessionContext);


    return (
        <div>
        { messages !== 'undefined' &&
       <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {messages.map((message) => (
        <ListItem
          key={message.message}
          disableGutters
          secondaryAction={
            <IconButton>
              <CommentIcon />
            </IconButton>
          }
        >
          <ListItemText primary={message.message} />
        </ListItem>
      ))}
    </List>}
    </div>
    );
};

export default Message;