"use client";

import { Typography } from "antd";

import TaskCard from "@src/Components/TaskCard";

import "./boardWorkspace.scss";

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

export default function BoardWorkspace({}: Props) {
    return (
        <div className="board-workspace">
            <div className="">
                <Typography.Text>Backlog 🤔</Typography.Text>
                {BacklogTaskData.map((task) => (
                    <TaskCard taskData={task} />
                ))}
            </div>
            <div className="">In Progress 📚</div>
            <div className="">In Review ⚙️</div>
            <div className="">Completed 🙌🏽</div>
            <div className="">Add another list</div>
        </div>
    );
}
