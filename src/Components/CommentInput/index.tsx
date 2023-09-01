"use client";
import React from "react";
import { Input, Button, Form } from "antd";

import Avatar from "@src/Components/Avatar";

import useUserStore from "@src/store/user";
import useTaskAddStore from "@src/store/taskAddStore";
import useTaskListStore from "@src/store/taskListStore";

import "./commentInput.scss";

type Props = {};

const { TextArea } = Input;

export default function CommentInput({}: Props) {
    const user = useUserStore((state) => state.user);

    const addComment = useTaskAddStore((state) => state.addComment);

    const handleCommentSubmit = (value: { comment: string }) => {
        addComment(value.comment);
    };

    return (
        <Form onFinish={handleCommentSubmit} className="comment-input-wrapper">
            <div className="comment-input">
                <Avatar src={user?.photoURL} size={28} />
                <Form.Item name="comment" className="comment-textarea-wrapper">
                    <TextArea
                        className="comment-textarea"
                        rows={2}
                        placeholder="Write a comment..."
                    />
                </Form.Item>
            </div>
            <div className="comment-btn-wrapper">
                <Button
                    htmlType="submit"
                    className="comment-btn"
                    type="primary"
                >
                    Comment
                </Button>
            </div>
        </Form>
    );
}
