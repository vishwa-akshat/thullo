/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import TasksAddModalSectionsHeader from "@src/Components/TasksAddModalSectionsHeader";

import editIcon from "@src/assets/edit.svg";

import "./taskDescription.scss";

type Props = {};

export default function TaskDescription({}: Props) {
    const [value, setValue] = React.useState("");
    const [isEdit, setIsEdit] = React.useState(false);

    const handleDescriptionEditButtonClick = () => {
        setIsEdit(!isEdit);
    };

    return (
        <div className="task-add-modal-description">
            <TasksAddModalSectionsHeader
                btnText="Edit"
                title="Description"
                icon={editIcon}
            />
            {isEdit ? (
                <ReactQuill theme="snow" value={value} onChange={setValue} />
            ) : (
                <p className="description">
                    Ideas are created and share here through a card. Here you
                    can describe what you'd like to accomplish. For example you
                    can follow three simple questions to create the card related
                    to your idea: * Why ? (Why do you wish to do it ?) * What ?
                    (What it is it, what are the goals, who is concerned) * How
                    ? (How do you think you can do it ? What are the required
                    steps ?) After creation, you can move your card to the todo
                    list.
                </p>
            )}
        </div>
    );
}
