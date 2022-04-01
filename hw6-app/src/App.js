import React, { useState } from "react";
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField";

export default function MyComponent() {
    const [toggleButton, setButton] = useState("SUBMIT");
    const [text, setText] = useState("");
    const [response, setResponse] = useState("")

    // developed from tutorial from piazza
    return(
        <div>
          <h1>Your Input Request to Server:
          <TextField id="fname" variant="outlined" onChange={(e) => setText(e.target.value)}/>
          <Button
              onClick={() => {
                // fetch("http://127.0.0.1:5000/api/" + text)  // local
                fetch("/api/" + text) // heroku
                    .then(response =>
                      response.json())
                    .then(data => {
                      setResponse(data.lname)})
                    .catch(error => {
                      console.log(error)})}}>
              {toggleButton}
          </Button>
          </h1>
          <h1>Response From Server: {response}</h1>
        </div>
    );
}
