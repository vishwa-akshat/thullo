"use client";

import React, { useEffect } from "react";
import { Modal } from "antd";

import SearchInput from "@src/Components/SearchInput";
import ImageList from "@src/Components/ImageList";

import useCoverSelectModalStore from "@src/store/coverSelectModalState";
import useCoverPhotosStore from "@src/store/coverPhotosStore";

import "./coverSelectModal.scss";

type Props = {
    topPosition: number;
    leftPosition: number;
    isOpen: boolean;
    handleCancel: () => void;
    setCover: (value: string) => void;
};

export default function CoverSelectModal({
    setCover,
    isOpen,
    handleCancel,
    topPosition,
    leftPosition,
}: Props) {
    const getPhotosList = useCoverPhotosStore((state) => state.getPhotosList);

    useEffect(() => {
        getPhotosList();
    }, []);

    return (
        <Modal
            style={{ top: topPosition, left: leftPosition }}
            className="cover-select-modal"
            open={isOpen}
            onCancel={handleCancel}
            footer={null}
            closeIcon={null}
        >
            <h3 className="modal-heading">Photo Search</h3>
            <p className="modal-description">Search Unsplash for photos</p>
            <div className="search-input-wrapper">
                <SearchInput />
            </div>
            <div className="image-list-wrapper">
                <ImageList setCover={setCover} handleCancel={handleCancel} />
            </div>
        </Modal>
    );
}
