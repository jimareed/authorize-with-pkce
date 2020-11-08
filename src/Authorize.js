import React from "react";

var crypto = require('crypto')

function authorize() {

  var verifier = base64URLEncode(crypto.randomBytes(32));
  var challenge = base64URLEncode(sha256(verifier));

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