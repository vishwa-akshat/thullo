"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "antd";

import Avatar from "@src/Components/Avatar";

import ArrowDown from "@src/assets/Arrow-down.svg";

import useAuth from "@src/firebase/auth";

import "./profileInfo.scss";

type Props = {};

const { Text } = Typography;

export default function ProfileInfo({}: Props) {
    const { user } = useAuth();

    if (!user) {
        return <></>;
    }

    return (
        <div className="profile-info-wrapper">
            {user.photoURL !== null ? (
                <Avatar src={user?.photoURL} />
            ) : (
                <Avatar name={user?.displayName} />
            )}

            <Text className="name">{user?.displayName}</Text>
            <Image
                className="arrow-down-icon"
                src={ArrowDown}
                alt="arrow down"
                width={25}
            />
        </div>
    );
}
