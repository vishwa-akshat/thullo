"use client";
import { useState } from "react";
import Image from "next/image";
import { Modal, Input } from "antd";

import GhostButton from "@src/Components/GhostButton";
import VisibilityModal from "@src/Components/VisibilityModal";
import CoverSelectModal from "@src/Components/CoverSelectModal";

import useBoardAddModalStore from "@src/store/boardAddModalState";
import useVisibilityModalStore from "@src/store/visibilityModalState";
import useCoverSelectModalStore from "@src/store/coverSelectModalState";
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

    const {
        showCoverSelectModal,
        isCoverSelectModalOpen,
        coverSelectModalHandleCancel,
    } = useCoverSelectModalStore();

    const visibilityOfBoard = useBoardStore((state) => state.visibilityOfBoard);
    const coverOfBoard = useBoardStore((state) => state.coverOfBoard);
    const setCoverOfBoard = useBoardStore((state) => state.setCoverOfBoard);

    const handleTitleChange = (event: any) => {
        setTitle(event.target.value);
    };

    const handleModalSubmit = () => {
        boardAddModalHandleOk({
            cover: coverOfBoard,
            title,
            visibility: visibilityOfBoard,
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
                src={coverOfBoard}
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
                <GhostButton
                    icon={imageIcon}
                    onClickHandler={() => showCoverSelectModal()}
                >
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
            <CoverSelectModal
                isOpen={isCoverSelectModalOpen}
                handleCancel={coverSelectModalHandleCancel}
                topPosition={310}
                leftPosition={-80}
                setCover={setCoverOfBoard}
            />
        </Modal>
    );
}
