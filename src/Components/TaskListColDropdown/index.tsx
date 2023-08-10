"use client";
import React from "react";
import Image from "next/image";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";

import moreIcon from "@src/assets/more.svg";

import "./taskListColDropdown.scss";

type Props = {};

const items: MenuProps["items"] = [
    {
        key: "1",
        label: <div className="task-list-option">Rename</div>,
    },
    {
        type: "divider",
    },
    {
        key: "2",
        label: <div className="task-list-option">Delete this list</div>,
    },
];

export default function TaskListColDropdown({}: Props) {
    return (
        <Dropdown
            trigger={["click"]}
            className="task-list-option-dropdown"
            menu={{ items }}
        >
            <Image
                width={20}
                src={moreIcon}
                alt="more"
                style={{ cursor: "pointer" }}
            />
        </Dropdown>
    );
}
