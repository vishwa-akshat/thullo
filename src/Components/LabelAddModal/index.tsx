"use client";
import React from "react";
import { Input, Modal } from "antd";

import LabelColorList from "@src/Components/LabelColorList";

import useLabelAddModalStore from "@src/store/labelAddModalState";

import labelIcon from "@src/assets/label.svg";

import "./labelAddModal.scss";
import Image from "next/image";
import TagsList from "../TagsList";

type Props = {
    isOpen: boolean;
    handleOk: (title: string) => void;
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

    const handleTitleChange = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setTitle(event.target.value);
    };

    return (
        <Modal
            className="label-add-modal"
            closeIcon={false}
            open={isOpen}
            okText="Add"
            onOk={() => handleOk(title)}
            onCancel={handleCancel}
        >
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
                <LabelColorList />
            </div>
            <div className="available-tags-wrapper">
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
            </div>
        </Modal>
    );
}
