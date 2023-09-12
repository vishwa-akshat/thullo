/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ReactQuill from "react-quill";
import { Button } from "antd";
import "react-quill/dist/quill.snow.css";

import TasksAddModalSectionsHeader from "@src/Components/TasksAddModalSectionsHeader";

import editIcon from "@src/assets/edit.svg";

import "./boardAndTaskDescription.scss";

type Props = {
    className?: string;
    description: string;
    onSubmit: (value: string) => void;
};

export default function BoardAndTaskDescription({
    className = "",
    onSubmit,
    description = "",
}: Props) {
    const [value, setValue] = React.useState("");
    const [isEdit, setIsEdit] = React.useState(false);

    const handleDescriptionEditButtonClick = () => {
        setIsEdit(true);
    };

    const handleDescriptionSubmit = () => {
        onSubmit(value);
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
                        className={className}
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
                    {!description ||
                    description === "" ||
                    description?.includes("<p><br></p>") ? (
                        "Please enter a description"
                    ) : (
                        <div
                            dangerouslySetInnerHTML={{
                                __html: description,
                            }}
                        ></div>
                    )}
                </div>
            )}
        </div>
    );
}
