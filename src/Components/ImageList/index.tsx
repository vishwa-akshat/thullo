import React from "react";
import Image from "next/image";

import useCoverPhotosStore from "@src/store/coverPhotosStore";
import { Photos } from "@src/store/types/Photos";

import "./imageList.scss";

type Props = {
    handleCancel: () => void;
    setCover: (value: string) => void;
};

export default function ImageList({ handleCancel, setCover }: Props) {
    const photos = useCoverPhotosStore((state) => state.photos);

    const handleImageClick = (image: Photos) => {
        setCover(image.urls.regular);
        handleCancel();
    };

    return (
        <div className="images-list">
            {photos.map((image: any, idx: number) => (
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
