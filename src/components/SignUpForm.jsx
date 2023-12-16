import React, { useState } from "react";

export default function SignUpForm() {
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPwd, setInputPwd] = useState("");
  const [loginUser, setLoginUser] = useState("");
  

  function signUp(e) {
    e.preventDefault();
    const person = { userName, userEmail, userPwd };

    const userFound = users.find((items) => {
      return userEmail == items.userEmail;
    });

    if (!userFound) {
      setUsers([...users, person]);
      alert("User Registered Successfull");
    } else {
      alert("User alreay exist");
    }
  }

  function login(){

    const userFound = users.find((items)=>{ return items.userEmail == inputEmail && items.userPwd === inputPwd });

    if(userFound){
      setLoginUser(userFound.userName);
    }
    else{
      alert("Invalid Email of password");
    }
  }

  return (
    <div className="container d-flex flex-wrap justify-content-around align-items-center">
      <div className="SignUp rounded mt-5 p-5 border border-2 border-danger">
        <h1 className="text-center">SignUp</h1>
        <form onSubmit={signUp}>
          <center>
            <input
              value={userName}
              className="m-3 d-block"
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />

            <input
              value={userEmail}
              className="m-3 d-block"
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
            />

            <input
              value={userPwd}
              className="m-3 d-block"
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setUserPwd(e.target.value);
              }}
            />

            <input
              type="submit"
              value="Sign up"
              className="btn btn-danger d-block"
            />
          </center>
        </form>
      </div>

      <div className="SignIn rounded mt-5 p-5 border border-2 border-primary">
        <h1 className="text-center">SignIn</h1>
        <center>
          <input
            value={inputEmail}
            className="m-3 d-block"
            type="email"
            placeholder="Email"
            onChange={(e) => {setInputEmail(e.target.value)}}
          />

          <input
            value={inputPwd}
            className="m-3 d-block"
            type="password"
            placeholder="Password"
            onChange={(e) => {setInputPwd(e.target.value)}}
          />
          <p>Mr.{loginUser} Login Successfull</p>
          <button className="btn btn-primary d-block" onClick={login}>Sign in</button>
        </center>
      </div>
    </div>
  );
}
