"use client";
import React from "react";
import Image from "next/image";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";

import useTaskListStore from "@src/store/taskListStore";
import useTasksListRenameModalStore from "@src/store/tasksListRenameModalState";

import moreIcon from "@src/assets/more.svg";

import "./taskListColDropdown.scss";

type Props = {
    id: string;
    tasks: any;
};

export default function TaskListColDropdown({ id, tasks }: Props) {
    const removeTaskList = useTaskListStore((state) => state.deleteTaskList);
    const setCurrentTaskList = useTaskListStore(
        (state) => state.setCurrentTaskList
    );

    const showTasksListRenameModal = useTasksListRenameModalStore(
        (state) => state.showTasksListRenameModal
    );

    const handleRenameClick = () => {
        setCurrentTaskList(tasks);
        showTasksListRenameModal();
    };

    const items: MenuProps["items"] = [
        {
            key: "1",
            label: (
                <div onClick={handleRenameClick} className="task-list-option">
                    Rename
                </div>
            ),
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
