"use client";
import { Modal } from "antd";

import VisibilityOptionsList from "../VisibilityOptionsList";

import useVisibilityModalStore from "@src/store/visibilityModalState";

import "./visibilityModal.scss";

type Props = {
    topPosition: number;
    leftPosition: number;
};

export default function VisibilityModal({ topPosition, leftPosition }: Props) {
    const {
        isVisibilityModalOpen,
        visibilityModalHandleOk,
        visibilityModalHandleCancel,
    } = useVisibilityModalStore();

    return (
        <Modal
            style={{ top: topPosition, left: leftPosition }}
            className="visibility-modal"
            open={isVisibilityModalOpen}
            onCancel={visibilityModalHandleCancel}
            footer={null}
            closeIcon={null}
        >
            <h2 className="modal-heading">Visibility</h2>
            <p className="modal-info">Choose who can see to this board.</p>
            <VisibilityOptionsList />
        </Modal>
    );
}
