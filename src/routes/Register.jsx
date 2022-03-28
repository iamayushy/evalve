import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterContext } from "../Context/RegisterContext";
const Register = () => {
  const { auth, setAuth } = useContext(RegisterContext);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, pass, uname, desc, number } = event.target;
    console.log(name.value, email.value, pass.value, uname.value, desc.value);

    const payLoad = {
      name: name.value,
      email: email.value,
      password: pass.value,
      username: uname.value,
      mobile: number.value,
      description: desc.value
    };

    putData(payLoad);
    if (auth === false) {
      navigate("/HOME");
    }
  };

  function putData(payLoad) {
    fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
      method: "POST",
      body: JSON.stringify(payLoad),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setAuth(json.error);
        console.log(auth);
      })
      .catch((error) => console.log("NILL"));
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="NAME" name="name" />
      <input type="text" placeholder="EMAIL" name="email" />
      <input type="text" placeholder="PASSWORD" name="pass" />
      <input type="text" placeholder="MOBILE NUMBER" name="number" />
      <input type="text" placeholder="USERNAME" name="uname" />
      <input type="text" placeholder="WHAT'S IN MIND" name="desc" />
      <input type="submit" />
    </form>
  );
};

export { Register };
