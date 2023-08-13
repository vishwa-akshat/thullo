import React from "react";

import CommentInput from "@src/Components/CommentInput";

import "./taskAddModalCommentsSection.scss";

type Props = {};

export default function TaskAddModalCommentsSection({}: Props) {
    return (
        <div className="task-add-modal-comments-section">
            <CommentInput />
        </div>
    );
}
