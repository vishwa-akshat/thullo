"use client";

import Image from "next/image";
import { Typography } from "antd";
import { Droppable } from "react-beautiful-dnd";

import TaskCard from "@src/Components/TaskCard";

import moreIcon from "@src/assets/more.svg";

import "./taskList.scss";

type Props = {};

const BacklogTaskData = [
    {
        image: "",
        title: "✋🏿 Add what you'd like to work on below",
        tags: [{ name: "Concept", color: "purple" }],
        attachments: 1,
        comments: 0,
        members: [],
    },
    {
        image: "https://images.unsplash.com/photo-1689890076926-afb4add0bc86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        title: "Github jobs challenge",
        tags: [
            { name: "Technical", color: "blue" },
            { name: "Design", color: "green" },
        ],
        attachments: 1,
        comments: 2,
        members: [
            {
                name: "Suzie",
                avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
            },
        ],
    },
];

export default function TaskList({}: Props) {
    return (
        <div className="task-list">
            <div className="task-list-header">
                <Typography.Text className="task-title">
                    Backlog 🤔
                </Typography.Text>
                <Image width={20} src={moreIcon} alt="more" />
            </div>
            <Droppable droppableId="droppable-1">
                {(provided, snapshot) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="task-droppable-zone"
                    >
                        {BacklogTaskData.map((task, idx) => (
                            <TaskCard key={idx} taskData={task} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
}
