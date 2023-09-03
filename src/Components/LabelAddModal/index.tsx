"use client";
import React from "react";
import { message, Input, Modal } from "antd";

import LabelColorList from "@src/Components/LabelColorList";

import useTaskAddStore from "@src/store/taskAddStore";

import labelIcon from "@src/assets/label.svg";

import "./labelAddModal.scss";
import Image from "next/image";
import TagsList from "../TagsList";

type Props = {
    isOpen: boolean;
    handleOk: () => void;
    handleCancel: () => void;
};

const tags = [
    {
        name: "Technical",
        color: "blue",
    },
    {
        name: "Design",
        color: "green",
    },
];

export default function LabelAddModal({
    isOpen,
    handleCancel,
    handleOk,
}: Props) {
    const [title, setTitle] = React.useState("");
    const [color, setColor] = React.useState("");

    const [messageApi, contextHolder] = message.useMessage();

    const updateLabel = useTaskAddStore((state) => state.updateLabel);

    const handleTitleChange = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setTitle(event.target.value);
    };

    const handleLabelModalOk = () => {
        if (title === "") {
            messageApi.open({
                type: "warning",
                content: "Enter the label text",
            });
        } else if (color === "") {
            messageApi.open({
                type: "warning",
                content: "Select the label color",
            });
        } else {
            updateLabel({ name: title, color });
            handleOk();
        }
    };

    return (
        <Modal
            className="label-add-modal"
            closeIcon={false}
            open={isOpen}
            okText="Add"
            onOk={handleLabelModalOk}
            onCancel={handleCancel}
        >
            {contextHolder}
            <div className="label-add-modal-header">
                <p className="title">Label</p>
                <p className="info">Select a name and a color</p>
            </div>
            <Input
                className="task-label-input"
                placeholder="Label..."
                onChange={handleTitleChange}
            />
            <div className="label-color-list-wrapper">
                <LabelColorList color={color} setColor={setColor} />
            </div>
            {/* <div className="available-tags-wrapper">
                <div className="available-tags-heading">
                    <Image
                        width={12}
                        height={12}
                        src={labelIcon}
                        className="label-icon"
                        alt="label"
                    />
                    <p className="heading">Available</p>
                </div>
                <div className="labels-list">
                    <TagsList tags={tags} />
                </div>
            </div> */}
        </Modal>
    );
}
