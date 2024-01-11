"use client";

import axios from "axios";
import React from "react";
import Cookies from "js-cookie";

export default function Page() {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
      confirm_password: e.target[3].value,
    };

    await axios
      .post("http://127.0.0.1:8000/api/register", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="name" />
      <input type="email" name="email" placeholder="email" />
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
