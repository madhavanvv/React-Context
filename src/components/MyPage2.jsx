//STEP-3===USE in COMPONENT
import { useState, useContext } from "react";
import AuthContext from "../store/authContext";

const MyPage2 = () => {
  const ctx = useContext(AuthContext);

  return (
    <div>
      <span>value is </span>
      <span>from maypage-2--{ctx.isLoggedin} </span>
      <button onClick={ctx.btnHandler}>from 2 page</button>
      <button
        onClick={() => {
          ctx.dataHandler(22);
        }}
      >
        data passfrom 2 page
      </button>
    </div>
  );
};
export default MyPage2;
