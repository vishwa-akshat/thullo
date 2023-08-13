import React from "react";

import TasksAddModalSectionsHeader from "@src/Components/TasksAddModalSectionsHeader";
import TaskAttachmentsViewList from "@src/Components/TaskAttachmentsViewList";

import plusIcon from "@src/assets/addGrey.svg";

import "./taskAttachment.scss";

type Props = {};

export default function TaskAttachment({}: Props) {
    return (
        <div className="task-attachment">
            <TasksAddModalSectionsHeader
                icon={plusIcon}
                btnText="Add"
                title="Attachments"
                iconWidth={18}
                iconHeight={18}
            />
            <div className="attachment-content-wrapper">
                <TaskAttachmentsViewList />
            </div>
        </div>
    );
}
