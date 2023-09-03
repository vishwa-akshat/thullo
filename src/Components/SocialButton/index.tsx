import React from "react";

import "./socialButton.scss";
import Image from "next/image";

type Props = {
    icon: any;
    name: string;
    isDisable: boolean;
    onClickHandler: () => void;
};

export default function SocialButton({
    isDisable,
    onClickHandler,
    icon,
    name,
}: Props) {
    return (
        <div
            className={`${isDisable && "social-btn-disable"} social-button`}
            onClick={onClickHandler}
        >
            <Image
                className="social-icon"
                src={icon}
                alt={name}
                width={20}
                height={20}
            />
        </div>
    );
}
