import React from "react";
import { SocialIcon } from "react-social-icons";
import { MouseEventHandler } from "react";
type Props = { setDarkModeAction: MouseEventHandler };

export default function Header({ setDarkModeAction }: Props) {
  const sendEmail = () => {
    window.location.href = "mailto:r1382333@gmail.com";
  };
  return (
    <header className="header">
      <div className="flex flex-row items-center">
        <SocialIcon
          url="https://github.com/RichardBoyz"
          fgColor="LightBlue"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/richardboyz/"
          fgColor="LightBlue"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.cakeresume.com/r1382333"
          fgColor="LightBlue"
          bgColor="transparent"
        />
      </div>
      <div className="flex flex-row items-center text-gray-300">
        <button onClick={setDarkModeAction}>123</button>
        <SocialIcon
          onClick={sendEmail}
          network="email"
          fgColor="LightBlue"
          bgColor="transparent"
        />
        <p className="mail--text" onClick={sendEmail}>
          Get In Touch
        </p>
      </div>
    </header>
  );
}
