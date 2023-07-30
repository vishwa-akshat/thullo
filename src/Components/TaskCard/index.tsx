"use client";
import Image from "next/image";
import { Typography } from "antd";

import TagsList from "@src/Components/TagsList";
import BoardTeamMember from "@src/Components/BoardTeamMembers";

import "./taskCard.scss";
import AttachmentAndCommentInfo from "../AttachmentAndCommentInfo";

type Task = {
    image: string;
    title: string;
    tags: {
        name: string;
        color: string;
    }[];
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

export default function TaskCard({
    taskData: { image, title, tags, members, comments, attachments },
}: Props) {
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
            <div className="team-members-and-attachment-info">
                <BoardTeamMember members={members} />
                <AttachmentAndCommentInfo
                    comments={comments}
                    attachments={attachments}
                />
            </div>
        </div>
    );
}
