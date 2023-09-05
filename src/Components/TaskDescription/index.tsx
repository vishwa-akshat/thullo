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

    const activeTaskEdit = useTaskAddStore((state) => state.activeTaskEdit);

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
                uploadProps={undefined}
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
                <div className="description">
                    {activeTaskEdit?.description === "" ||
                    activeTaskEdit?.description.includes("<p><br></p>") ? (
                        "Please enter a description"
                    ) : (
                        <div
                            dangerouslySetInnerHTML={{
                                __html: activeTaskEdit?.description,
                            }}
                        ></div>
                    )}
                </div>
            )}
        </div>
    );
}
