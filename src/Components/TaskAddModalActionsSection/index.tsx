import React from "react";
import Image from "next/image";

import accountIcon from "@src/assets/accountUser.svg";

import groupIcon from "@src/assets/group.svg";
import labelIcon from "@src/assets/label.svg";
import imageIcon from "@src/assets/image.svg";

import "./taskAddModalActionsSection.scss";
import GhostButton from "../GhostButton";

type Props = {};

const buttonsArr = [
    {
        id: "1",
        name: "Members",
        icon: groupIcon,
    },
    {
        id: "2",
        name: "Labels",
        icon: labelIcon,
    },
    {
        id: "3",
        name: "Cover",
        icon: imageIcon,
    },
];

export default function TaskAddModalActionsSection({}: Props) {
    return (
        <div className="task-add-actions-section">
            <div className="actions-header">
                <Image
                    className="header-icon"
                    width={16}
                    height={16}
                    src={accountIcon}
                    alt="user"
                />
                <p className="header-text">Actions</p>
            </div>
            <div className="actions-buttons-wrapper">
                {buttonsArr.map((button) => (
                    <GhostButton
                        key={button.id}
                        icon={button.icon}
                        onClickHandler={() => null}
                    >
                        {button.name}
                    </GhostButton>
                ))}
            </div>
        </div>
    );
}
