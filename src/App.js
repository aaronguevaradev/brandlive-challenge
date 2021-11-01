import { useState } from "react";
import { SessionProvider } from "./contexts/session";
import UserContext from "./contexts/UserContext";

import Chat from "./layout/Chat";

import logo from "./images/Brandlive-logo-white.jpg";
import "./App.scss";
import Grid from "@mui/material/Grid";

function App() {
  const userName = useState("");

  return (
    <UserContext.Provider value={userName}>
      <SessionProvider>
        <div className="app">
          <header className="app-header">
            <Grid container spacing={2}>
              <Grid item xs={9}>
                <img src={logo} className="app-logo" alt="logo" />
                <h2 className="app-motto">Telly Chat</h2>
              </Grid>
              <Grid item xs={1}>
                <h2> Hi! {userName}</h2>
              </Grid>
            </Grid>
          </header>
          <Chat />
        </div>
      </SessionProvider>
    </UserContext.Provider>
  );
}

export default App;
