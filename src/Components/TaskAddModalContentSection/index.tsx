import React from "react";

import TaskDescription from "@src/Components/BoardAndTaskDescription";
// import TaskAttachment from "@src/Components/TaskAttachment";
import TaskAddModalCommentsSection from "@src/Components/TaskAddModalCommentsSection";
import TaskTitleAdd from "@src/Components/TaskTitleAdd";
import OutlinedButton from "@src/Components/OutlinedButton";
import TagsList from "@src/Components/TagsList";

import editIcon from "@src/assets/edit.svg";

import useTaskAddStore from "@src/store/taskAddStore";
import useTaskListStore from "@src/store/taskListStore";

import "./taskAddModalContentSection.scss";

type Props = {};

export default function TaskAddModalContentSection({}: Props) {
    const [isTitleEditing, setIsTitleEditing] = React.useState(false);

    const activeTaskEdit = useTaskAddStore((state) => state.activeTaskEdit);
    const setDescription = useTaskAddStore((state) => state.setDescription);

    const taskListInfo = useTaskListStore((state) => state.currentTaskList);

    return (
        <div className="task-add-modal-content-section">
            <div className="tags-list-wrapper">
                <TagsList tags={activeTaskEdit?.labels} />
            </div>
            <div className="section-header">
                {isTitleEditing ? (
                    <TaskTitleAdd setIsTitleEditing={setIsTitleEditing} />
                ) : (
                    <div className="title-wrapper">
                        <p className="title">{activeTaskEdit?.title}</p>
                        <OutlinedButton
                            icon={editIcon}
                            onClickHandler={() => setIsTitleEditing(true)}
                        >
                            Edit
                        </OutlinedButton>
                    </div>
                )}
                <p className="task-list-info">
                    in list{" "}
                    <span className="task-list-name">
                        {taskListInfo?.title}
                    </span>
                </p>
            </div>
            <div className="task-description-wrapper">
                <TaskDescription
                    onSubmit={setDescription}
                    description={activeTaskEdit?.description}
                />
            </div>
            {/* <div className="task-attachment-wrapper">
                <TaskAttachment />
            </div> */}
            <div className="comments-section-wrapper">
                <TaskAddModalCommentsSection />
            </div>
        </div>
    );
}
