import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import Image from "next/image";
/* import twitter from "/assets/images/icon-twitter.svg";
import linkedin from "/assets/images/icon-linkedin.svg";
import git from "/assets/images/icon-github.svg";
import frontendMentor from "/assets/images/icon-frontend-mentor.svg"; */

export default (Navbar) => {
  return (
    <div className="md:z-50 flex items-center md:items-stretch justify-between flex-wrap">
      <a href="#" target="_blank" rel="noopener noreferrer">
        adamkeys
      </a>

      <div className="flex items-center justify-end p-4 space-x-6">
        <a
          href="https://github.com/adamkeys"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/images/icon-github.svg"
            alt="logo"
            width={25}
            height={25}
            className="invert dark:invert-0"
          />
        </a>
        <a
          href="https://www.frontendmentor.io/profile/adamkeys"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/images/icon-frontend-mentor.svg"
            alt="logo"
            width={25}
            height={25}
            className="invert dark:invert-0"
          />
        </a>
        <a
          href="https://linkedin.com/in/adam-keys"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/images/icon-linkedin.svg"
            alt="logo"
            width={25}
            height={25}
            className="invert dark:invert-0"
          />
        </a>
        <a
          href="https://twitter.com/adamkeys"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-7"
        >
          <Image
            src="/assets/images/icon-twitter.svg"
            alt="logo"
            width={25}
            height={25}
            className="invert dark:invert-0"
          />
        </a>
        <ThemeSwitch />
      </div>
    </div>
  );
};
