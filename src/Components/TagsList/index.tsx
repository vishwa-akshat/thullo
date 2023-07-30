"use client";
import React from "react";
import { Tag } from "antd";

import "./tagsList.scss";

type Props = {
    tags: {
        name: string;
        color: string;
    }[];
};

export default function TagsList({ tags }: Props) {
    return (
        <div className="tags-list">
            {tags.map((tag) => (
                <Tag
                    className="tag"
                    bordered={false}
                    color={tag.color}
                    key={tag.name}
                >
                    {tag.name}
                </Tag>
            ))}
        </div>
    );
}
