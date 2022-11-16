import React, { useState, useEffect } from "react";
import { Box, Button, Checkbox, FormControl, FormControlLabel, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { NewspaperTwoTone } from "@mui/icons-material";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies();
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.token) {
      navigate("/");
    }
  }, []);

  const handleLogin = async () => {
    const loginData = {
      email: userName,
      password,
    };
    //first res by get api//

    // const res = await fetch("https://reqres.in/api/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(loginData),
    // });
    //second res by get api****//
    const res = await axios.post("https://reqres.in/api/login", loginData);
    const twoWeeks = new Date(Date.now() + 12096e5);
    if (res.status === 200) {
      setCookie("token", res.data.token, {
        maxAge: remember ? twoWeeks : null,
      });
      navigate("/");
    }
  };

  return (
    <>
      <Box
        height="100vh"
        gap="1rem"
        alignItems="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <TextField
          onChange={(e) => setUserName(e.target.value)}
          sx={{ width: "30%" }}
          type="text"
          id="outlined-basic"
          label="ایمیل خود را وارد کنید"
          variant="outlined"
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          sx={{ width: "30%" }}
          type="password"
          id="outlined-basic"
          label="رمز خود را وارد کنید"
          variant="outlined"
        />
        <FormControlLabel sx={{textAlign:"right",}}
          label="مرا بخاطر بسپار"
          control={
            <Checkbox
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
        />
        <Button onClick={handleLogin} variant="contained">
          ورود
        </Button>
      </Box>
    </>
  );
};

export default Login;
