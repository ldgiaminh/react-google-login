import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "717001371363-rsdvunlups063p6ndrnrcd2igen6v50c.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    console.log("Logout made successfully");
    alert("Logout made successfully ✌");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
