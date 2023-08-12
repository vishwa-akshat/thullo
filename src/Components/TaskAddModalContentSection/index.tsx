import React from "react";

import TaskDescription from "@src/Components/TaskDescription";
import TaskAttachment from "@src/Components/TaskAttachment";

import "./taskAddModalContentSection.scss";

type Props = {};

export default function TaskAddModalContentSection({}: Props) {
    return (
        <div className="task-add-modal-content-section">
            <div className="section-header">
                <p className="title">
                    ✋🏿 Move anything that is actually started here
                </p>
                <p className="task-list-info">
                    in list <span className="task-list-name">In Progress</span>
                </p>
            </div>
            <div className="task-description-wrapper">
                <TaskDescription />
            </div>
            <div className="task-attachment-wrapper">
                <TaskAttachment />
            </div>
        </div>
    );
}
