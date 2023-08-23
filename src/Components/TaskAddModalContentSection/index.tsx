import React from "react";

import TaskDescription from "@src/Components/TaskDescription";
import TaskAttachment from "@src/Components/TaskAttachment";
import TaskAddModalCommentsSection from "@src/Components/TaskAddModalCommentsSection";
import TaskTitleAdd from "@src/Components/TaskTitleAdd";
import OutlinedButton from "../OutlinedButton";

import editIcon from "@src/assets/edit.svg";

import useTaskAddStore from "@src/store/taskAddStore";

import "./taskAddModalContentSection.scss";

type Props = {};

export default function TaskAddModalContentSection({}: Props) {
    const [isTitleEditing, setIsTitleEditing] = React.useState(false);

    const title = useTaskAddStore((state) => state.title);

    return (
        <div className="task-add-modal-content-section">
            <div className="section-header">
                {isTitleEditing ? (
                    <TaskTitleAdd setIsTitleEditing={setIsTitleEditing} />
                ) : (
                    <div className="title-wrapper">
                        <p className="title">
                            {title !== "" ? title : "Please Enter Your Title"}
                        </p>
                        <OutlinedButton
                            icon={editIcon}
                            onClickHandler={() => setIsTitleEditing(true)}
                        >
                            Edit
                        </OutlinedButton>
                    </div>
                )}
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
            <div className="comments-section-wrapper">
                <TaskAddModalCommentsSection />
            </div>
        </div>
    );
}
