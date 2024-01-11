"use client";

import React from "react";
import Cookies from "js-cookie";
import axios from "axios";

export default function Page() {
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    await axios
      .post("http://127.0.0.1:8000/api/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        Cookies.set("token", res.data.data.token);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <button type="submit">Login</button>
    </form>
  );
}
