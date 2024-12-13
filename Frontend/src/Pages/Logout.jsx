import React from "react";
import toast from "react-hot-toast";
import { Link, redirect, useNavigate } from "react-router-dom";
import axios from "axios";
// import { Server } from "../context/TimeAgo";
import BeatLoader from "react-spinners/BeatLoader";
import { useState } from "react";

export default function Logout() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const logout = async () => {
    setLoader(true);

    try {
      const response = await axios.post(
        process.env.SERVER+ "auth/logout",
        // "http://localhost:5000/api/auth/logout",
        {},
        {
          withCredentials: true,
        }
      ); // Make sure the URL is correct
      console.log(response.data);
      if (response.data.status) {
        toast.success(response.data.message);
        // navigate("/");
        navigate("/");
        window.location.reload(true);

        localStorage.clear();
      } else {
        toast.success(response.data.message);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.error || "An error occurred";
      toast.error(errorMessage);
    } finally {
      setLoader(false);
    }
  };
  return (
    <>
      <button
        type="submit"
        onClick={logout}
        className=""
      >
        {loader ? (
          <div className=" ">
            <BeatLoader size={10} />
          </div>
        ) : (
          <div>Logout</div>
        )}
      </button>
    </>
  );
}