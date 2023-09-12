import React from "react";
import Image from "next/image";
import { Button } from "antd";

import TasksAddModalSectionsHeader from "../TasksAddModalSectionsHeader";

import "./boardMenuDrawerTeamMembers.scss";

type Props = {
    members: any[];
};

export default function BoardMenuDrawerTeamMembers({ members = [] }: Props) {
    return (
        <div className="board-menu-drawer-team-members-wrapper">
            <TasksAddModalSectionsHeader title="Team" isButtonHid={true} />
            <div className="members-list">
                {members.map((member) => (
                    <div key={member?.uid} className="member-wrapper">
                        <div className="member-info">
                            <Image
                                width={32}
                                height={32}
                                src={member?.photoURL}
                                alt="member avatar"
                            />
                            <p className="member-name">{member?.displayName}</p>
                        </div>
                        {member?.isAdmin ? (
                            <p className="admin-text">Admin</p>
                        ) : (
                            <Button className="remove-btn">Remove</Button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
