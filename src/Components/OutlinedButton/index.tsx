"use client";
import React from "react";
import Image from "next/image";
import { Button } from "antd";

import "./outlinedButton.scss";

type Props = {
    children: string;
    icon?: SVGElement;
    onClickHandler: () => void;
    width?: number;
    height?: number;
};

export default function OutlinedButton({
    children,
    icon,
    onClickHandler,
    width,
    height,
}: Props) {
    if (icon) {
        return (
            <Button
                icon={
                    <Image
                        width={width ? width : 12}
                        height={height ? height : 12}
                        src={icon}
                        alt="icon"
                    />
                }
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
