"use client";

import Image from "next/image";
import { Modal, Input } from "antd";

import GhostButton from "@src/Components/GhostButton";

import useBoardAddModalStore from "@src/store/boardAddModalState";

import addIcon from "@src/assets/add.svg";
import lockIcon from "@src/assets/lock.svg";
import imageIcon from "@src/assets/image.svg";

import "./boardAddModal.scss";

type Props = {};

export default function BoardAddModal({}: Props) {
    const {
        isBoardAddModalOpen,
        boardAddModalHandleOk,
        boardAddModalHandleCancel,
    } = useBoardAddModalStore();

    return (
        <Modal
            className="board-add-modal"
            open={isBoardAddModalOpen}
            onOk={boardAddModalHandleOk}
            okText={`Create`}
            okButtonProps={{
                icon: <Image width={17} height={17} src={addIcon} alt="icon" />,
            }}
            onCancel={boardAddModalHandleCancel}
        >
            <Image
                src="https://images.unsplash.com/photo-1690040849147-cb9810b8ca3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="cover"
                width={260}
                height={80}
                className="cover-image"
            />
            <Input
                className="board-input-title"
                placeholder="Add board title"
            />
            <div className="btn-wrapper">
                <GhostButton icon={imageIcon} onClickHandler={() => null}>
                    Cover
                </GhostButton>
                <GhostButton icon={lockIcon} onClickHandler={() => null}>
                    Private
                </GhostButton>
            </div>
        </Modal>
    );
}
