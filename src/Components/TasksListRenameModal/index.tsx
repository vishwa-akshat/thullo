"use client";
import React from "react";
import { Modal, Input } from "antd";

import useTasksListRenameModalStore from "@src/store/tasksListRenameModalState";

import "./tasksListRenameModal.scss";

type Props = {};

export default function TasksListRenameModal({}: Props) {
    const [title, setTitle] = React.useState("");

    const handleTitleChange = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setTitle(event.target.value);
    };

    const {
        isTasksListRenameModalOpen,
        tasksListRenameModalHandleOk,
        tasksListRenameModalHandleCancel,
    } = useTasksListRenameModalStore();

    return (
        <Modal
            className="tasks-list-rename-modal"
            closeIcon={false}
            open={isTasksListRenameModalOpen}
            onOk={() => tasksListRenameModalHandleOk(title)}
            onCancel={tasksListRenameModalHandleCancel}
        >
            <Input
                className="task-list-input-title"
                placeholder="Rename Task List Title"
                onChange={handleTitleChange}
            />
        </Modal>
    );
}
