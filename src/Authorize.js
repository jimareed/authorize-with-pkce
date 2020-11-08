import React from "react";

var crypto = require('crypto')
const axios = require('axios');


function authorize() {

  var verifier = base64URLEncode(crypto.randomBytes(32));
  var challenge = base64URLEncode(sha256(verifier));

  const authUrl = new URL("http://webcode.me");

  authUrl.searchParams.append("response_type", "code");
  authUrl.searchParams.append("code_challenge", challenge);
  authUrl.searchParams.append("code_challenge_method", "S256");
  authUrl.searchParams.append("client_id", "");
  authUrl.searchParams.append("redirect_uri", "http://localhost:3000/callback");
  authUrl.searchParams.append("scope", "SCOPE");
  authUrl.searchParams.append("audience", "API_AUDIENCE");
  authUrl.searchParams.append("state", "STATE");

  axios.get(authUrl).then(resp => {

    window.alert(resp.data);
});

  return window.alert("authorize:" + challenge);
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