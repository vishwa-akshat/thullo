"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "antd";
import { useRouter } from "next/navigation";

import AvatarList from "@src/Components/AvatarList";

import "./boardCard.scss";

type CardData = {
    cover: string;
    title: string;
    // members: {
    //     name: string;
    //     avatar: string;
    // }[];
};

type Props = {
    cardData: CardData;
};

const members = [
    {
        name: "Suzie",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    },
    {
        name: "Reh",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
];

export default function BoardCard({ cardData: { cover, title } }: Props) {
    const router = useRouter();

    const handleBoardCardClick = () => {
        router.push(`/board/${title}`);
    };

    return (
        <div className="board-card" onClick={handleBoardCardClick}>
            <Image
                className="board-banner"
                width={220}
                height={130}
                src={cover}
                alt="background"
            />
            <Typography.Title className="title">{title}</Typography.Title>
            <AvatarList members={members} />
        </div>
    );
}
