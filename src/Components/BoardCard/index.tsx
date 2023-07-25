import React from "react";
import Image from "next/image";
import { Typography } from "antd";

import AvatarList from "@src/Components/AvatarList";

import "./boardCard.scss";

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
            <Image
                className="board-banner"
                width={220}
                height={130}
                src={image}
                alt="background"
            />
            <Typography.Title className="title">{title}</Typography.Title>
            <AvatarList members={members} />
        </div>
    );
}
