"use client";

import Avatar from "../Avatar";

import addIcon from "@src/assets/add.svg";

import "./boardTeamMembers.scss";
import { Button } from "antd";
import Image from "next/image";
type Props = {};

const Members = [
    {
        name: "Suzie",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    },
    {
        name: "Reh",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
        name: "drake",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
        name: "Rengaku Ade",
        avatar: "",
    },
];

export default function BoardTeamMember({}: Props) {
    return (
        <div className="board-team-members">
            {Members.map((member, idx) => (
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
