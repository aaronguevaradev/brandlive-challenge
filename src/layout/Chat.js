import Username from "../components/Username";
import Message from "../components/Message";
import MessageInput from "../components/MessageInput";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import Grid from "@mui/material/Grid";

import "./Chat.scss";

function Chat() {
  const [userName] = useContext(UserContext);
  return (
    <Box component="span" sx={{ p: 2, display: "inline-block", mx: "2px" }}>
      <div className="chat">{!userName && <Username />}</div>
      {userName && (
        <Grid container spacing={3}>
          <Grid item xs></Grid>
          <Grid item xs={4}>
            <Card variant="outlined" sx={{ minWidth: 275 }}>
              <CardContent>
                <div className="chat-messages">
                  <Message />
                  <MessageInput />
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      )}
    </Box>
  );
}

export default Chat;
