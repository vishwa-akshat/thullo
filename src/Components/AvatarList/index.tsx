"use client";

import React from "react";
import { Avatar as AntAvatar, Typography } from "antd";

import Avatar from "@src/Components/Avatar";

import "./avatarList.scss";

type Members = {
    name: string;
    avatar: string;
};

type Props = {
    members: Members[];
};

export default function AvatarList({ members }: Props) {
    const remainingMembersCount = members.length - 3;
    return (
        <div className="avatar-list">
            {members.map((member, idx) => {
                if (idx > 2) return;
                return (
                    <Avatar
                        size={28}
                        key={idx}
                        src={member.avatar}
                        name={member.name}
                    />
                );
            })}
            {members.length > 3 ? (
                <Typography.Text className="remaining-members-count">
                    +{remainingMembersCount} others
                </Typography.Text>
            ) : null}
        </div>
    );
}
