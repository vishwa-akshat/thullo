"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "antd";

import Avatar from "@src/Components/Avatar";

import ArrowDown from "@src/assets/Arrow-down.svg";

import useUserStore from "@src/store/user";

import "./profileInfo.scss";

type Props = {};

const { Text } = Typography;

export default function ProfileInfo({}: Props) {
    const user = useUserStore((state) => state.user);

    if (!user) {
        return <></>;
    }

    return (
        <div className="profile-info-wrapper">
            {user.photoURL !== null ? <Avatar src={user.photoURL} /> : null}

            <Text className="name">
                {user.displayName ? user.displayName : user.email}
            </Text>
            <Image
                className="arrow-down-icon"
                src={ArrowDown}
                alt="arrow down"
                width={25}
            />
        </div>
    );
}
