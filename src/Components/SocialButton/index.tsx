import React from "react";

import "./socialButton.scss";
import Image from "next/image";

type Props = {
    icon: SVGImageElement;
    name: string;
};

export default function SocialButton({ icon, name }: Props) {
    return (
        <div className="social-button">
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
