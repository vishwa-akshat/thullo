"use client";
import React from "react";
import { Modal, Input } from "antd";

import useTasksListAddModalStore from "@src/store/TasksListAddModalState";

import "./tasksListAddModal.scss";

type Props = {};

export default function TasksListAddModal({}: Props) {
    const [title, setTitle] = React.useState("");

    const handleTitleChange = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setTitle(event.target.value);
    };

    const {
        isTasksListAddModalOpen,
        tasksListAddModalHandleOk,
        tasksListAddModalHandleCancel,
    } = useTasksListAddModalStore();

    return (
        <Modal
            className="tasks-list-add-modal"
            closeIcon={false}
            open={isTasksListAddModalOpen}
            onOk={() => tasksListAddModalHandleOk(title)}
            onCancel={tasksListAddModalHandleCancel}
        >
            <Input
                className="task-list-input-title"
                placeholder="Add Task List Title"
                onChange={handleTitleChange}
            />
        </Modal>
    );
}
