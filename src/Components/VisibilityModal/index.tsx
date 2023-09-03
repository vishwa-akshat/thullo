"use client";
import { Modal } from "antd";

import VisibilityOptionsList from "../VisibilityOptionsList";

import "./visibilityModal.scss";

type Props = {
    topPosition: number;
    leftPosition: number;
    isOpen: boolean;
    isUpdate: boolean;
    handleCancel: () => void;
    handleOk: (value: string) => void;
};

export default function VisibilityModal({
    topPosition,
    leftPosition,
    isOpen,
    handleCancel,
    handleOk,
    isUpdate,
}: Props) {
    return (
        <Modal
            style={{ top: topPosition, left: leftPosition }}
            className="visibility-modal"
            open={isOpen}
            onCancel={handleCancel}
            footer={null}
            closeIcon={null}
        >
            <h2 className="modal-heading">Visibility</h2>
            <p className="modal-info">Choose who can see to this board.</p>
            <VisibilityOptionsList isUpdate={isUpdate} handleOk={handleOk} />
        </Modal>
    );
}
