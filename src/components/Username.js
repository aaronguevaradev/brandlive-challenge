import "./Username.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { setLocalStorage, getLocalStorage } from "../lib/storage";
import settings from "../data/settings";

function Username() {
  const [userName, setUserName] = useContext(UserContext);
  const [userNow, setUserNow] = useState(() => {
    // getting stored value
    const saved = getLocalStorage(settings.StorageUsernameKey);
    const initialValue = saved;
    return initialValue || "";
  });

  const handleChange = event => {
    event.preventDefault();
    setUserName(userNow);
    setLocalStorage(settings.StorageUsernameKey, userNow);
  };


  return (
      <div>
      { userName==="" &&
    <form onSubmit={handleChange} className="username-form">
      <div className="form-group">
        <TextField
          id="username"
          label="Username "
          variant="standard" 
          maxLength={10}
          value={userNow}
          onChange={event => setUserNow(event.target.value)}
        />
        <Button variant="outlined" id="enter-chat1" type="submit">
          Let's Chat!
        </Button>
      </div>
    </form>}
    </div>
  );
}

export default Username;
