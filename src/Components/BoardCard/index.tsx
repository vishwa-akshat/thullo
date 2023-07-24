import React from "react";

import "./boardCard.scss";
import Image from "next/image";

type CardData = {
    image: string;
    title: string;
    members: {
        name: string;
        avatar: string;
    }[];
};

type Props = {
    cardData: CardData;
};

export default function BoardCard({
    cardData: { image, title, members },
}: Props) {
    return (
        <div className="board-card">
            <Image width={220} height={130} src={image} alt="background" />
        </div>
    );
}
