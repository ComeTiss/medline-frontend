import React from "react";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha
} from "react-google-recaptcha-v3";

function Captcha() {
  const key = process.env.REACT_APP_CAPTCHA_KEY;

  return (
    <GoogleReCaptchaProvider reCaptchaKey={key}>
      <GoogleReCaptcha onVerify={() => console.log("Captcha valide")} />
    </GoogleReCaptchaProvider>
  );
}

export default Captcha;
