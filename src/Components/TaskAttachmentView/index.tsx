"use client";
import React from "react";
import Image from "next/image";

import "./taskAttachmentView.scss";
import OutlinedButton from "../OutlinedButton";

type Attachment = {
    createdAt: Date;
    name: string;
    cover: string;
};

type Props = {
    attachmentData: Attachment;
};

export default function TaskAttachmentView({
    attachmentData: { createdAt, name, cover },
}: Props) {
    const FileNameInitial = name.slice(0, 2).toUpperCase();

    return (
        <div className="task-attachment-view">
            {cover ? (
                <Image
                    width={95}
                    height={64}
                    className="task-attachment-cover"
                    src={cover}
                    alt="cover"
                />
            ) : (
                <div className="task-attachment-cover-alternative">
                    {FileNameInitial}
                </div>
            )}

            <div className="attachment-info-wrapper">
                <p className="attachment-date">
                    Added {createdAt.toDateString()}
                </p>
                <p className="attachment-name">{name}</p>
                <div className="attachment-action-btns-wrapper">
                    <OutlinedButton onClickHandler={() => null}>
                        Download
                    </OutlinedButton>
                    <OutlinedButton onClickHandler={() => null}>
                        Delete
                    </OutlinedButton>
                </div>
            </div>
        </div>
    );
}
