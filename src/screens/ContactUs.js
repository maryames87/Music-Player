import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";

const ContactUs = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <>
   
      <Box component="h1">تماس با ما...</Box>
      <hr/>
      <Box component="ul">
        {users?.map((user) => (
          <Box marginBottom="1rem" key={user.id} component="li">
            {user.name}
          </Box>
        ))}
      </Box>
    </>
  );
};

export default ContactUs;
