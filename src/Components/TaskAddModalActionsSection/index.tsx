import React from "react";
import Image from "next/image";

import GhostButton from "../GhostButton";

import LabelAddModal from "@src/Components/LabelAddModal";
import CoverSelectModal from "@src/Components/CoverSelectModal";

import useLabelAddModalStore from "@src/store/labelAddModalState";
import useTaskCoverSelectModalStore from "@src/store/taskCoverSelectModalStore";
import useTaskAddStore from "@src/store/taskAddStore";

import accountIcon from "@src/assets/accountUser.svg";
import groupIcon from "@src/assets/group.svg";
import labelIcon from "@src/assets/label.svg";
import imageIcon from "@src/assets/image.svg";

import "./taskAddModalActionsSection.scss";

type Props = {};

export default function TaskAddModalActionsSection({}: Props) {
    const {
        showLabelAddModal,
        isLabelAddModalOpen,
        labelAddModalHandleOk,
        labelAddModalHandleCancel,
    } = useLabelAddModalStore();

    const {
        showTaskCoverSelectModal,
        isTaskCoverSelectModalOpen,
        taskCoverSelectModalHandleCancel,
    } = useTaskCoverSelectModalStore();

    const updateCover = useTaskAddStore((state) => state.updateCover);

    const buttonsArr = [
        // {
        //     id: "1",
        //     name: "Members",
        //     icon: groupIcon,
        //     action: null,
        // },
        {
            id: "2",
            name: "Labels",
            icon: labelIcon,
            action: showLabelAddModal,
        },
        {
            id: "3",
            name: "Cover",
            icon: imageIcon,
            action: showTaskCoverSelectModal,
        },
    ];

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
                        onClickHandler={() =>
                            button.action ? button.action() : null
                        }
                    >
                        {button.name}
                    </GhostButton>
                ))}
            </div>
            <LabelAddModal
                isOpen={isLabelAddModalOpen}
                handleOk={labelAddModalHandleOk}
                handleCancel={labelAddModalHandleCancel}
            />
            <CoverSelectModal
                setCover={updateCover}
                isOpen={isTaskCoverSelectModalOpen}
                handleCancel={taskCoverSelectModalHandleCancel}
                topPosition={0}
                leftPosition={0}
            />
        </div>
    );
}
