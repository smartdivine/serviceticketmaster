import React from "react";
import { TextField, Button } from "@material-ui/core";

const CustomForm = () => {
  return (
    <form>
      <TextField label="First Name" variant="outlined" fullWidth />
      <TextField label="Last Name" variant="outlined" fullWidth />
      {/* Add more form fields here */}
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default CustomForm;
