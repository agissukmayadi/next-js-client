"use client";

import axios from "axios";
import React from "react";
import Cookies from "js-cookie";

export default function Page() {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      username: e.target[0].value,
      password: e.target[1].value,
      confirm_password: e.target[2].value,
    };

    await axios
      .post("http://127.0.0.1:8000/api/admin/register", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        Cookies.set("token", response.data.data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="username" />
      <input type="password" name="password" placeholder="password" />
      <input
        type="password"
        name="confirm_password"
        placeholder="confirm_password"
      />
      <button type="submit">Register</button>
    </form>
  );
}
