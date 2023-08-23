/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ReactQuill from "react-quill";
import { Button } from "antd";
import "react-quill/dist/quill.snow.css";

import TasksAddModalSectionsHeader from "@src/Components/TasksAddModalSectionsHeader";

import editIcon from "@src/assets/edit.svg";

import useTaskAddStore from "@src/store/taskAddStore";

import "./taskDescription.scss";

type Props = {};

export default function TaskDescription({}: Props) {
    const [value, setValue] = React.useState("");
    const [isEdit, setIsEdit] = React.useState(false);

    const setDescription = useTaskAddStore((state) => state.setDescription);
    const description = useTaskAddStore((state) => state.description);

    const handleDescriptionEditButtonClick = () => {
        setIsEdit(true);
    };

    const handleDescriptionSubmit = () => {
        setDescription(value);
        setIsEdit(false);
    };

    return (
        <div className="task-add-modal-description">
            <TasksAddModalSectionsHeader
                btnText="Edit"
                title="Description"
                icon={editIcon}
                onClickHandler={handleDescriptionEditButtonClick}
                isButtonHid={isEdit}
            />
            {isEdit ? (
                <>
                    <ReactQuill
                        theme="snow"
                        value={value}
                        onChange={setValue}
                    />
                    <div className="btn-wrapper">
                        <Button
                            htmlType="submit"
                            type="primary"
                            onClick={handleDescriptionSubmit}
                        >
                            Confirm
                        </Button>
                        <Button danger onClick={() => setIsEdit(false)}>
                            Cancel
                        </Button>
                    </div>
                </>
            ) : (
                <p className="description">
                    {description !== "" ? (
                        <p
                            dangerouslySetInnerHTML={{ __html: description }}
                        ></p>
                    ) : (
                        "Please enter a description"
                    )}
                </p>
            )}
        </div>
    );
}
