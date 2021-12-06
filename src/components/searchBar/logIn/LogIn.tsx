import React, { useEffect, useState } from "react";
import style from "./LogIn.module.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useAction } from "../../../hooks/useAction";
import { useAppSelector } from "../../../hooks/selectorHook";

const LogIn: React.FC = () => {
  //HOOKS
  const { logIn, logOut } = useAction();
  const { profile } = useAppSelector((state) => state.products);
  const [logInVisible, setlogInVisible] = useState(true);
  const [logOutVisible, setlogOutVisible] = useState(false);

  const clientId =
    "607309279287-t2gjk9nn48ten6ghefgcgkjrh5dfh06n.apps.googleusercontent.com";

  const onLoginSuccess = (response: any) => {
    logIn(response.profileObj);
    setlogOutVisible(true);
    setlogInVisible(false);
    localStorage.setItem("profile", JSON.stringify(response.profileObj));
  };
  const onFailureSuccess = (response: any) => {
    console.log(response);
  };

  const onSignoutSuccess = () => {
    localStorage.removeItem("profile");
    logOut();
    setlogOutVisible(false);
    setlogInVisible(true);
    alert("you have been signed out");
  };

  useEffect(() => {
    profile.name
      ? (() => {
          setlogOutVisible(true);
          setlogInVisible(false);
        })()
      : (() => {
          setlogOutVisible(false);
          setlogInVisible(true);
        })();
  }, [profile]);

  return (
    <div className={style.container}>
      {logInVisible ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={onLoginSuccess}
          onFailure={onFailureSuccess}
          cookiePolicy={"single_host_origin"}
        />
      ) : null}
      {logOutVisible ? (
        <GoogleLogout
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={onSignoutSuccess}
        />
      ) : null}
    </div>
  );
};

export default LogIn;
