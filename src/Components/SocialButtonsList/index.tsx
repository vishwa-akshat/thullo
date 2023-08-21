import React from "react";

import SocialButton from "@src/Components/SocialButton";

import googleIcon from "@src/assets/google.svg";
import facebookIcon from "@src/assets/facebook.svg";
import twitterIcon from "@src/assets/twitter.svg";
import githubIcon from "@src/assets/github.svg";

import useUserStore from "@src/store/user";

import "./socialButtonsList.scss";

type Props = {};

export default function SocialButtonsList({}: Props) {
    const signInWithGoogle = useUserStore((state) => state.signInWithGoogle);

    const buttonsArr = [
        {
            name: "google",
            icon: googleIcon,
            onClickHandler: signInWithGoogle,
            isDisable: false,
        },
        {
            name: "facebook",
            icon: facebookIcon,
            onClickHandler: signInWithGoogle,
            isDisable: true,
        },
        {
            name: "twitter",
            icon: twitterIcon,
            onClickHandler: signInWithGoogle,
            isDisable: true,
        },
        {
            name: "github",
            icon: githubIcon,
            onClickHandler: signInWithGoogle,
            isDisable: true,
        },
    ];
    return (
        <div className="social-buttons-list">
            {buttonsArr.map((button, idx) => (
                <SocialButton
                    isDisable={button.isDisable}
                    onClickHandler={button.onClickHandler}
                    icon={button.icon}
                    key={idx}
                    name={button.name}
                />
            ))}
        </div>
    );
}
