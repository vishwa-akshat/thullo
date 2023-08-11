"use client";
import Image from "next/image";
import { Modal } from "antd";

import TaskAddModalContentSection from "@src/Components/TaskAddModalContentSection";
import TaskAddModalActionsSection from "@src/Components/TaskAddModalActionsSection";

import useTaskAddModalStore from "@src/store/taskAddModalState";

import "./taskAddModal.scss";

type Props = {};

const tempImg =
    "https://images.unsplash.com/photo-1689890076926-afb4add0bc86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";

export default function TaskAddModal({}: Props) {
    const { isTaskAddModalOpen, taskAddModalHandleCancel } =
        useTaskAddModalStore();

    return (
        <Modal
            className="task-add-modal"
            open={isTaskAddModalOpen}
            footer={null}
            onCancel={taskAddModalHandleCancel}
        >
            <Image
                className="task-cover"
                width={616}
                height={130}
                src={tempImg}
                alt="cover"
            />
            <div className="task-add-modal-body">
                <TaskAddModalContentSection />
                <TaskAddModalActionsSection />
            </div>
        </Modal>
    );
}
