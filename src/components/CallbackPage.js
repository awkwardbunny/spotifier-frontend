import React from "react";
import { Redirect } from "react-router-dom";

const CallbackPage = () => {
  const hash = window.location.hash
    .substring(1)
    .split("&")
    .reduce(function(initial, item) {
      if(item){
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});
  window.location.hash = ""

  // Do check here
  // console.log(hash);
  if(hash.access_token){
    localStorage.setItem('token', hash.access_token);
  }
    
  return <Redirect to="/" />;
};

export default CallbackPage;