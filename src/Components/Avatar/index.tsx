"use client";

import React from "react";
import Image from "next/image";
import { UserOutlined } from "@ant-design/icons";
import { Avatar as AntAvatar } from "antd";

import "./avatar.scss";

type Props = {
    src?: string;
    size?: number;
    name?: string;
};

export default function Avatar({ name = "Jon Doe", src, size = 32 }: Props) {
    const nameArr = name.split(" ");
    const firstName = nameArr[0];
    const lastName = nameArr[1];

    return (
        <div className="avatar-wrapper">
            {src ? (
                <AntAvatar
                    shape="square"
                    size={size}
                    src={
                        <Image
                            width={size}
                            height={size}
                            src={src}
                            alt="avatar"
                        />
                    }
                />
            ) : (
                <AntAvatar shape="square" size={size}>
                    {firstName[0].toUpperCase()}
                    {lastName[0].toUpperCase()}
                </AntAvatar>
            )}
        </div>
    );
}
