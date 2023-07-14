"use client";

import React from "react";
import Image from "next/image";
import { UserOutlined } from "@ant-design/icons";
import { Avatar as AntAvatar } from "antd";

import "./avatar.scss";

type Props = {
    src?: string;
};

export default function Avatar({ src }: Props) {
    return (
        <div className="avatar-wrapper">
            {src ? (
                <AntAvatar
                    shape="square"
                    size={32}
                    src={<Image src={src} alt="avatar" />}
                />
            ) : (
                <AntAvatar shape="square" size={32} icon={<UserOutlined />} />
            )}
        </div>
    );
}
