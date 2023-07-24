"use client";

import { SVGProps } from "react";
import { Button as AntButton } from "antd";

import "./button.scss";
import Image from "next/image";

type Props = {
    children: string;
    icon?: SVGProps<SVGElement>;
};

export default function Button({ children, icon }: Props) {
    if (icon) {
        return (
            <AntButton
                icon={<Image width={20} height={20} src={icon} alt="icon" />}
                className="button"
                type="primary"
            >
                {children}
            </AntButton>
        );
    }

    return (
        <AntButton className="button" type="primary">
            {children}
        </AntButton>
    );
}
