"use client";
import React from "react";
import { Divider } from "antd";

import "./commentView.scss";
import Avatar from "../Avatar";

type Comment = {
    id: number;
    avatar: string;
    name: string;
    createdAt: string;
    comment: string;
};

type Props = {
    commentData: Comment;
    isLast: boolean;
};

export default function CommentView({ commentData, isLast }: Props) {
    return (
        <div className="comment-view">
            <div className="comment-view-header">
                <div className="comment-profile-info">
                    <Avatar name={commentData.name} />
                    <div className="profile-info">
                        <p className="name">{commentData.name}</p>
                        <p className="date">{commentData.createdAt}</p>
                    </div>
                </div>
                <div className="comment-actions-wrapper">
                    <a href="#" className="comment-action">
                        Edit
                    </a>
                    <span className="dash">-</span>
                    <a href="#" className="comment-action">
                        Delete
                    </a>
                </div>
            </div>
            <p className="comment">{commentData.comment}</p>
            {!isLast && <Divider />}
        </div>
    );
}
