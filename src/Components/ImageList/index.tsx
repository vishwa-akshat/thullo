import React from "react";
import Image from "next/image";

import useCoverPhotosStore from "@src/store/coverPhotosStore";
import useBoardStore from "@src/store/boardStore";
import { Photos } from "@src/store/types/Photos";

import "./imageList.scss";
import useCoverSelectModalStore from "@src/store/coverSelectModalState";

type Props = {};

export default function ImageList({}: Props) {
    const photos = useCoverPhotosStore((state) => state.photos);

    const coverSelectModalHandleCancel = useCoverSelectModalStore(
        (state) => state.coverSelectModalHandleCancel
    );

    const setCoverOfBoard = useBoardStore((state) => state.setCoverOfBoard);

    const handleImageClick = (image: Photos) => {
        setCoverOfBoard(image.urls.regular);
        coverSelectModalHandleCancel();
    };

    return (
        <div className="images-list">
            {photos.map((image, idx) => (
                <Image
                    onClick={() => handleImageClick(image)}
                    className="cover-image"
                    width={55}
                    height={55}
                    key={idx}
                    src={image.urls.small}
                    alt={image.alt_description}
                />
            ))}
        </div>
    );
}
