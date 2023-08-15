import React from "react";

import SocialButton from "@src/Components/SocialButton";

import googleIcon from "@src/assets/google.svg";
import facebookIcon from "@src/assets/facebook.svg";
import twitterIcon from "@src/assets/twitter.svg";
import githubIcon from "@src/assets/github.svg";

import "./socialButtonsList.scss";

type Props = {};

const buttonsArr = [
    {
        name: "google",
        icon: googleIcon,
    },
    {
        name: "facebook",
        icon: facebookIcon,
    },
    {
        name: "twitter",
        icon: twitterIcon,
    },
    {
        name: "github",
        icon: githubIcon,
    },
];

export default function SocialButtonsList({}: Props) {
    return (
        <div className="social-buttons-list">
            {buttonsArr.map((button, idx) => (
                <SocialButton icon={button.icon} key={idx} name={button.name} />
            ))}
        </div>
    );
}
