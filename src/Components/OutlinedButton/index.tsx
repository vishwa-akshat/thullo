"use client";
import React from "react";
import Image from "next/image";
import { Button } from "antd";

import "./outlinedButton.scss";

type Props = {
    children: string;
    icon?: React.SVGProps<SVGElement>;
    onClickHandler: () => void;
};

export default function OutlinedButton({
    children,
    icon,
    onClickHandler,
}: Props) {
    if (icon) {
        return (
            <Button
                icon={<Image width={12} height={12} src={icon} alt="icon" />}
                className="outlined-button"
                type="default"
                onClick={onClickHandler}
            >
                {children}
            </Button>
        );
    }
    return (
        <Button
            className="outlined-button"
            type="default"
            onClick={onClickHandler}
        >
            {children}
        </Button>
    );
}
