import React from "react";

import CommentView from "@src/Components/CommentView";

import "./commentsList.scss";

type Props = {};

const comments = [
    {
        id: 1,
        avatar: "",
        name: "Mikael Stanley",
        createdAt: "24 August at 20:43",
        comment:
            "“The gladdest moment in human life, methinks, is a departure into unknown lands.” – Sir Richard Burton",
    },
    {
        id: 2,
        avatar: "",
        name: "Mikael Stanley",
        createdAt: "24 August at 20:43",
        comment:
            "Once the ideas is clearly defined, the task can move to #todo stage. ",
    },
];

export default function CommentsList({}: Props) {
    return (
        <div className="comments-list">
            {comments.map((comment, idx) => (
                <CommentView
                    isLast={idx === comments.length - 1}
                    key={comment.id}
                    commentData={comment}
                />
            ))}
        </div>
    );
}
