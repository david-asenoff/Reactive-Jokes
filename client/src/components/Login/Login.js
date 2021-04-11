import { React, useState, useContext, useEffect } from "react";
import * as usersService from "../../services/usersService";
import UserContext from "../../contexts/UserContext";

const Login = ({ history }) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const { userInfo } = useContext(UserContext);  
  const [user, setUser] = userInfo;
 
  const onSubmitLoginHandler = async (e) => {
    e.preventDefault();
    const userData = {};    
    userData.email = Email;
    userData.password = Password;    
    const token = await usersService.signIn(userData);       
    setUser(Email);
    history.push("/");
  };
  return (
    <form onSubmit={onSubmitLoginHandler}>
      <h1>Login</h1>
      <label htmlFor="Email">
        <p>Email</p>
        <input
          type="email"
          name="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label htmlFor="Password">
        <p>Password</p>
        <input
          type="text"
          name="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <div>
        <input type="submit" value="Login" />
      </div>
    </form>
  );
};

export default Login;