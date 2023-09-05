"use client";
import React from "react";
import { Divider } from "antd";

import "./commentView.scss";
import Avatar from "../Avatar";

type Props = {
    commentData: any;
    isLast: boolean;
};

export default function CommentView({ commentData, isLast }: Props) {
    return (
        <div className="comment-view">
            <div className="comment-view-header">
                <div className="comment-profile-info">
                    {commentData.userProfileImage === "" ? (
                        <Avatar name={commentData?.userName} />
                    ) : (
                        <Avatar src={commentData?.userProfileImage} />
                    )}
                    <div className="profile-info">
                        <div className="name">{commentData?.userName}</div>
                        {/* <p className="date">{commentData?.timestamp}</p> */}
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
            <div className="comment">{commentData?.message}</div>
            {!isLast && <Divider />}
        </div>
    );
}
