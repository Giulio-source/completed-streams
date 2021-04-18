import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signOut } from "../actions";

function GoogleAuth() {
  const dispatch = useDispatch();
  const googleAuthStatus = useSelector((state) => state.auth.isSignedIn);
  const googleUserId = useSelector((state) => state.auth.userId);
  console.log("GOOGLE STATUS", googleAuthStatus, googleUserId);
  useEffect(() => {
    window.gapi.load("auth2", () => {
      window.gapi.auth2
        .init({
          client_id:
            "997230127830-dbrebsh0kardgmv6aq6rp1eupr40idu7.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          const auth = window.gapi.auth2.getAuthInstance();
          updateSignInState(auth.isSignedIn.get());
          auth.isSignedIn.listen(updateSignInState);
        });
    });
  }, []);

  const onSignInClick = () => {
    window.gapi.auth2.getAuthInstance().signIn();
  };

  const onSignOutClick = () => {
    window.gapi.auth2.getAuthInstance().signOut();
  };

  const updateSignInState = (isSignedIn) => {
    if (isSignedIn) {
      dispatch(
        signIn(window.gapi.auth2.getAuthInstance().currentUser.get().getId())
      );
    } else {
      dispatch(signOut());
    }
  };

  const renderAuthButton = () => {
    if (googleAuthStatus === null) return null;
    if (googleAuthStatus) {
      return <button onClick={onSignOutClick}>Sign out</button>;
    }
    return <button onClick={onSignInClick}>Sign in</button>;
  };

  return <div className="buttons">{renderAuthButton()}</div>;
}

export default GoogleAuth;
