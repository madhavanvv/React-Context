//STEP-1==CREATE CONTEXT
//in create contex put default or dummy  values,so when u use ide gives auto complete

import React from "react";
const AuthContext = React.createContext({
  isLoggedin: "NOoooooo",
  btnHandler: () => {},
});
export default AuthContext;
