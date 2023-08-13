"use client";
import React from "react";
import { Input, Button } from "antd";

import Avatar from "@src/Components/Avatar";

import "./commentInput.scss";

type Props = {};

const { TextArea } = Input;

export default function CommentInput({}: Props) {
    return (
        <div className="comment-input-wrapper">
            <div className="comment-input">
                <Avatar
                    src="https://images.unsplash.com/photo-1689890076926-afb4add0bc86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    size={28}
                />
                <TextArea
                    className="comment-textarea"
                    rows={2}
                    placeholder="Write a comment..."
                />
            </div>
            <div className="comment-btn-wrapper">
                <Button className="comment-btn" type="primary">
                    Comment
                </Button>
            </div>
        </div>
    );
}
