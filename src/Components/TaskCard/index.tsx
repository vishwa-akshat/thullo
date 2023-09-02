"use client";
import Image from "next/image";
import { Typography } from "antd";
// import { Draggable } from "react-beautiful-dnd";

import TagsList from "@src/Components/TagsList";
import AttachmentAndCommentInfo from "../AttachmentAndCommentInfo";
import BoardTeamMember from "@src/Components/BoardTeamMembers";

import useTaskAddModalStore from "@src/store/taskAddModalState";
import useTaskListStore from "@src/store/taskListStore";
import useTaskAddStore from "@src/store/taskAddStore";

import "./taskCard.scss";

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
    currentTasklist: any;
};

export default function TaskCard({ taskData, currentTasklist }: Props) {
    const showTaskAddModal = useTaskAddModalStore(
        (state) => state.showTaskAddModal
    );

    const setActiveTaskList = useTaskListStore(
        (state) => state.setCurrentTaskList
    );

    const setActiveTaskEdit = useTaskAddStore(
        (state) => state.setActiveTaskEdit
    );

    const handleCardClick = () => {
        showTaskAddModal();
        setActiveTaskList(currentTasklist);
        setActiveTaskEdit(taskData);
    };

    return (
        <div className="task-card" onClick={handleCardClick}>
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
                <BoardTeamMember members={taskData?.members} />
                <AttachmentAndCommentInfo
                    comments={taskData?.comments}
                    attachments={taskData?.attachments}
                />
            </div>
        </div>
    );
}
