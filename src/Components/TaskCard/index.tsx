"use client";
import Image from "next/image";
import { Typography } from "antd";

import TagsList from "@src/Components/TagsList";

import "./taskCard.scss";

type Task = {
    image: string;
    title: string;
    tags: string[];
    attachments: number;
    comments: number;
    members: {
        name: string;
        avatar: string;
    }[];
};

type Props = {
    taskData: Task;
};

export default function TaskCard({ taskData: { image, title, tags } }: Props) {
    return (
        <div className="task-card">
            {image && (
                <Image
                    className="cover"
                    src={image}
                    alt="cover"
                    height={130}
                    width={220}
                />
            )}
            <Typography.Text className="title">{title}</Typography.Text>
            <div className="tags-list-wrapper">
                <TagsList tags={tags} />
            </div>
        </div>
    );
}
