"use client";
import React from "react";
import { Tag } from "antd";

import "./tagsList.scss";

type Task = {
    name: string;
    color: string;
};

type Props = {
    tags: Task[];
};

export default function TagsList({ tags = [] }: Props) {
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
