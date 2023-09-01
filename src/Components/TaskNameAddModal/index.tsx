"use client";
import React from "react";
import { Modal, Input } from "antd";

import useTaskNameAddModalStore from "@src/store/taskNameAddModalState";

import "./taskNameAddModal.scss";

type Props = {};

export default function TaskNameAddModal({}: Props) {
    const [title, setTitle] = React.useState("");

    const handleTitleChange = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setTitle(event.target.value);
    };

    const {
        isTaskNameAddModalOpen,
        taskNameAddModalHandleOk,
        taskNameAddModalHandleCancel,
    } = useTaskNameAddModalStore();

    return (
        <Modal
            className="tasks-list-add-modal"
            closeIcon={false}
            open={isTaskNameAddModalOpen}
            onOk={() => taskNameAddModalHandleOk(title)}
            onCancel={taskNameAddModalHandleCancel}
        >
            <Input
                className="task-list-input-title"
                placeholder="Add Task Title"
                onChange={handleTitleChange}
            />
        </Modal>
    );
}
