"use client";

import { Modal } from "antd";

import useBoardAddModalStore from "@src/store/boardAddModalState";

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
            title="Basic Modal"
            open={isBoardAddModalOpen}
            onOk={boardAddModalHandleOk}
            onCancel={boardAddModalHandleCancel}
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    );
}
