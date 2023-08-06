"use client";
import { useState } from "react";
import Image from "next/image";
import { Modal, Input } from "antd";

import GhostButton from "@src/Components/GhostButton";
import VisibilityModal from "@src/Components/VisibilityModal";

import useBoardAddModalStore from "@src/store/boardAddModalState";
import useVisibilityModalStore from "@src/store/visibilityModalState";
import useBoardStore from "@src/store/boardStore";

import addIcon from "@src/assets/add.svg";
import lockIcon from "@src/assets/lock.svg";
import imageIcon from "@src/assets/image.svg";
import publicIcon from "@src/assets/public.svg";

import "./boardAddModal.scss";

type Props = {};

export default function BoardAddModal({}: Props) {
    const [title, setTitle] = useState("");

    const {
        isBoardAddModalOpen,
        boardAddModalHandleOk,
        boardAddModalHandleCancel,
    } = useBoardAddModalStore();

    const showVisibilityModal = useVisibilityModalStore(
        (state) => state.showVisibilityModal
    );

    const visibilityOfBoard = useBoardStore((state) => state.visibilityOfBoard);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleModalSubmit = () => {
        boardAddModalHandleOk({
            cover: "https://images.unsplash.com/photo-1690081541249-5725c2cb5029?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            title,
        });
    };

    return (
        <Modal
            className="board-add-modal"
            open={isBoardAddModalOpen}
            onOk={handleModalSubmit}
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
                onChange={handleTitleChange}
            />
            <div className="btn-wrapper">
                <GhostButton icon={imageIcon} onClickHandler={() => null}>
                    Cover
                </GhostButton>
                <GhostButton
                    icon={
                        visibilityOfBoard === "Public" ? publicIcon : lockIcon
                    }
                    onClickHandler={() => showVisibilityModal()}
                >
                    {visibilityOfBoard}
                </GhostButton>
            </div>
            <VisibilityModal topPosition={310} leftPosition={100} />
        </Modal>
    );
}
