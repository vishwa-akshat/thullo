"use client";
import React from "react";
import Image from "next/image";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";

import useTaskStore from "@src/store/taskStore";

import moreIcon from "@src/assets/more.svg";

import "./taskListColDropdown.scss";

type Props = {
    id: string;
};

export default function TaskListColDropdown({ id }: Props) {
    const removeTaskList = useTaskStore((state) => state.removeTaskList);

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
            label: (
                <div
                    onClick={() => removeTaskList(id)}
                    className="task-list-option"
                >
                    Delete this list
                </div>
            ),
        },
    ];

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
