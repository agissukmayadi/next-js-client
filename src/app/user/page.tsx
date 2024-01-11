"use client";
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
export default function Page() {
  const fetchUser = async () => {
    await axios
      .get("http://127.0.0.1:8000/api/user", {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return <div></div>;
}
