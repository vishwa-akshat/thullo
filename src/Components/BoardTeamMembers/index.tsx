"use client";

import Avatar from "../Avatar";

import addIcon from "@src/assets/add.svg";

import "./boardTeamMembers.scss";
import { Button } from "antd";
import Image from "next/image";

type Members = {
    name: string;
    avatar: string;
};

type Props = {
    members: Members[];
};

export default function BoardTeamMember({ members = [] }: Props) {
    return (
        <div className="board-team-members">
            {members.map((member, idx) => (
                <Avatar
                    size={34}
                    key={idx}
                    src={member.avatar}
                    name={member.name}
                />
            ))}
            <Button
                type="primary"
                className="add-team-member-button"
                icon={
                    <Image
                        width={24}
                        height={24}
                        src={addIcon}
                        alt="add icon"
                    />
                }
            />
        </div>
    );
}
