"use client";
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { navigate } from "../../utils/navigate";
export default function Page() {
  const fetchUser = async () => {
    await axios
      .delete("http://127.0.0.1:8000/api/logout", {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((res) => {
        Cookies.remove("token");
        navigate("/login");
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
