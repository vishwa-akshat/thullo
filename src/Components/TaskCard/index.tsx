"use client";
import Image from "next/image";
import { Typography } from "antd";
// import { Draggable } from "react-beautiful-dnd";

import TagsList from "@src/Components/TagsList";
import BoardTeamMember from "@src/Components/BoardTeamMembers";

import "./taskCard.scss";
import AttachmentAndCommentInfo from "../AttachmentAndCommentInfo";

type Task = {
    id?: string;
    cover?: string;
    title?: string;
    labels: {
        name: string;
        color: string;
    }[];
    attachments?: any;
    comments?: any;
    members?: {
        name: string;
        avatar: string;
    }[];
};

type Props = {
    taskData: Task;
    id: number;
};

export default function TaskCard({ taskData, id }: Props) {
    return (
        // <Draggable draggableId={id.toString()} index={id}>
        //     {(provided, snapshot) => (
        <div
            // ref={provided.innerRef}
            // {...provided.draggableProps}
            // {...provided.dragHandleProps}
            className="task-card"
        >
            {taskData?.cover && (
                <Image
                    className="cover"
                    src={taskData.cover}
                    alt="cover"
                    height={130}
                    width={220}
                />
            )}
            <Typography.Text className="title">
                {taskData?.title}
            </Typography.Text>
            {taskData.labels.length === 0 ? (
                <></>
            ) : (
                <div className="tags-list-wrapper">
                    <TagsList tags={taskData.labels} />
                </div>
            )}

            <div className="team-members-and-attachment-info">
                {/* <BoardTeamMember members={members} /> */}
                <AttachmentAndCommentInfo
                    comments={taskData?.comments}
                    attachments={taskData?.attachments}
                />
            </div>
        </div>
        //     )}
        // </Draggable>
    );
}
