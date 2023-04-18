//STEP-2==PROVIDER
import { useState } from "react";

import "./App.css";
import MyPage1 from "./components/MyPage1";
import MyPage2 from "./components/MyPage2";
import AuthContext from "./store/authContext";

function App() {
  const [isLoggedin, setIsLoggedin] = useState("NO");
  const loginHandler = () => {
    if (isLoggedin == "NO") {
      setIsLoggedin("YES");
    } else {
      setIsLoggedin("NO");
    }
  };

  const btnHandler = () => {
    console.log("hello-clicked");
  };

  const dataHandler = (data) => {
    console.log(`from app ${data}`);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedin: isLoggedin,
        btnHandler: btnHandler,
        dataHandler: dataHandler,
      }}
    >
      <div className="App">
        <div>from app ${isLoggedin}</div>
        <MyPage1 />
        <MyPage2 />
        <button onClick={loginHandler}>Login</button>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
