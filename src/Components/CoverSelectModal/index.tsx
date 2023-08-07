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
};

export default function CoverSelectModal({ topPosition, leftPosition }: Props) {
    const { isCoverSelectModalOpen, coverSelectModalHandleCancel } =
        useCoverSelectModalStore();

    const getPhotosList = useCoverPhotosStore((state) => state.getPhotosList);

    useEffect(() => {
        getPhotosList();
    }, []);

    return (
        <Modal
            style={{ top: topPosition, left: leftPosition }}
            className="cover-select-modal"
            open={isCoverSelectModalOpen}
            onCancel={coverSelectModalHandleCancel}
            footer={null}
            closeIcon={null}
        >
            <h3 className="modal-heading">Photo Search</h3>
            <p className="modal-description">Search Unsplash for photos</p>
            <div className="search-input-wrapper">
                <SearchInput />
            </div>
            <div className="image-list-wrapper">
                <ImageList />
            </div>
        </Modal>
    );
}
