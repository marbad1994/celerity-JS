import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
import { useHistory } from "react-router-dom";

function Login() {
    const history = useHistory();

    const routeChange = () =>{ 
      let path = "/random"; 
      history.push(path);
    }
    return(
        <div style={loginStyle}>
            <InputGroup>
                <Input placeholder="username" />
            </InputGroup>
                <br />
            <InputGroup>
                <Input placeholder="password" />
            </InputGroup>
            <br />
            <Button style={buttonSize} color="primary" onClick={routeChange}>Login</Button>
            <Button style={buttonSize} color="secondary">Register</Button>

            
        </div>
    )
}

const loginStyle = {
    width: "720px",
    marginRight: "15px"
}

const buttonSize = {
    width: "360px"
}
export default Login;