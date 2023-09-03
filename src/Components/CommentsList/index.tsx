import React from "react";

import CommentView from "@src/Components/CommentView";

import "./commentsList.scss";
import useTaskAddStore from "@src/store/taskAddStore";

type Props = {};

export default function CommentsList({}: Props) {
    const activeTaskEdit = useTaskAddStore((state) => state.activeTaskEdit);

    if (activeTaskEdit?.comments?.length === 0) {
        return <></>;
    }

    return (
        <div className="comments-list">
            {activeTaskEdit?.comments?.map((comment: any, idx: number) => (
                <CommentView
                    isLast={idx === activeTaskEdit.comments.length - 1}
                    key={comment.id}
                    commentData={comment}
                />
            ))}
        </div>
    );
}
