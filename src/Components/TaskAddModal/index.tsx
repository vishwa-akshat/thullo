"use client";
import Image from "next/image";
import { Modal } from "antd";

import TaskAddModalContentSection from "@src/Components/TaskAddModalContentSection";
import TaskAddModalActionsSection from "@src/Components/TaskAddModalActionsSection";

import useTaskAddModalStore from "@src/store/taskAddModalState";

import "./taskAddModal.scss";
import useTaskAddStore from "@src/store/taskAddStore";

type Props = {};

export default function TaskAddModal({}: Props) {
    const { isTaskAddModalOpen, taskAddModalHandleCancel } =
        useTaskAddModalStore();

    const activeTaskEdit = useTaskAddStore((state) => state.activeTaskEdit);

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
                src={activeTaskEdit?.cover}
                alt="cover"
            />
            <div className="task-add-modal-body">
                <TaskAddModalContentSection />
                <TaskAddModalActionsSection />
            </div>
        </Modal>
    );
}
