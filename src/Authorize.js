import React from "react";

var crypto = require('crypto')

function authorize() {

  const APP_DOMAIN = process.env.REACT_APP_DOMAIN || "" 
  const APP_CLIENTID = process.env.REACT_APP_CLIENTID || "" 
  
  var verifier = base64URLEncode(crypto.randomBytes(32));
  var challenge = base64URLEncode(sha256(verifier));

  sessionStorage.setItem("code-verifier", verifier);

  const authURL = `https://${APP_DOMAIN}/authorize?response_type=code&client_id=${APP_CLIENTID}&redirect_uri=http://localhost:3000/callback&scope=SCOPE&state=STATE&code_challenge=${challenge}&code_challenge_method=S256`;

  // open the spotify authentication page
  window.open(authURL);
}

function base64URLEncode(str) {
  return str.toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '');
}

function sha256(buffer) {
  return crypto.createHash('sha256').update(buffer).digest();
}


const Authorize = () => {

  return (
      <button onClick={() => authorize()}>Authorize</button>
    );
};

export default Authorize;