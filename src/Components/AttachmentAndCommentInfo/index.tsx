"use client";
import Image from "next/image";
import { Typography } from "antd";

import commentIcon from "@src/assets/comment.svg";
import attachIcon from "@src/assets/attach.svg";

import "./attachmentAndCommentsInfo.scss";

type Props = {
    comments: any;
    attachments: any;
};

export default function AttachmentAndCommentInfo({
    comments,
    attachments,
}: Props) {
    return (
        <div className="attachment-info-wrapper">
            <div className="info-wrapper">
                <Image
                    width={12}
                    height={12}
                    src={commentIcon}
                    alt="comment icon"
                />
                <Typography.Text className="info-text">
                    {comments?.length}
                </Typography.Text>
            </div>
            <div className="info-wrapper">
                <Image
                    width={14}
                    height={14}
                    src={attachIcon}
                    alt="attachment icon"
                />
                <Typography.Text className="info-text">
                    {attachments?.length}
                </Typography.Text>
            </div>
        </div>
    );
}
