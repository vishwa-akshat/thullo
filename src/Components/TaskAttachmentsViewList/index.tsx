import React from "react";

import TaskAttachmentView from "@src/Components/TaskAttachmentView";

import "./taskAttachmentsViewList.scss";

type Props = {};

const attachments = [
    {
        createdAt: new Date("July 5, 2020"),
        name: "Reasoning by Ranganath Krishnamani",
        cover: "https://images.unsplash.com/photo-1689890076926-afb4add0bc86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
        createdAt: new Date("July 5, 2020"),
        name: "Gatsby-config.js",
        cover: "",
    },
];

export default function TaskAttachmentsViewList({}: Props) {
    return (
        <div className="task-attachments-view-list">
            {attachments.map((attachment, idx) => (
                <TaskAttachmentView key={idx} attachmentData={attachment} />
            ))}
        </div>
    );
}
