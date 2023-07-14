"use client";

import React from "react";
import { Typography } from "antd";

import Avatar from "@src/Components/Avatar";

import ArrowDown from "@src/assets/Arrow-down.svg";

import "./profileInfo.scss";
import Image from "next/image";

type Props = {
    name?: string;
};

const { Text } = Typography;

export default function ProfileInfo({ name = "Xanthe Neal" }: Props) {
    return (
        <div className="profile-info-wrapper">
            <Avatar />
            <Text className="name">{name}</Text>
            <Image
                className="arrow-down-icon"
                src={ArrowDown}
                alt="arrow down"
                width={25}
            />
        </div>
    );
}
