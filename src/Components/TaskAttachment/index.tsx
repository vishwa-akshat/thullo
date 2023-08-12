import React from "react";

import plusIcon from "@src/assets/addGrey.svg";

import "./taskAttachment.scss";
import TasksAddModalSectionsHeader from "../TasksAddModalSectionsHeader";

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
                TasksAddModalSectionsHeader
            </div>
        </div>
    );
}
