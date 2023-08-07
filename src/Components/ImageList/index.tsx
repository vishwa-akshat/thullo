import React from "react";
import Image from "next/image";

import useCoverPhotosStore from "@src/store/coverPhotosStore";

import "./imageList.scss";

type Props = {};

export default function ImageList({}: Props) {
    const photos = useCoverPhotosStore((state) => state.photos);

    return (
        <div className="images-list">
            {photos.map((image, idx) => (
                <Image
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
