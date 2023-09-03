"use client";

import Image from "next/image";
import { SVGProps } from "react";
import { Button as AntButton } from "antd";

import "./ghostButton.scss";

type Props = {
    children: string;
    icon?: any;
    onClickHandler: () => void;
};

export default function GhostButton({ children, icon, onClickHandler }: Props) {
    const handleBtnClick = () => {
        onClickHandler();
    };

    if (icon) {
        return (
            <AntButton
                icon={<Image width={15} height={15} src={icon} alt="icon" />}
                className="ghost-button"
                type="primary"
                onClick={handleBtnClick}
            >
                {children}
            </AntButton>
        );
    }

    return (
        <AntButton className="ghost-button" type="primary">
            {children}
        </AntButton>
    );
}
