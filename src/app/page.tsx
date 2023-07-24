"use client";
import { Typography } from "antd";

import Button from "@src/Components/Button";
import BoardsList from "@src/Components/BoardsList";

import addIcon from "@src/assets/add.svg";

import "./home.scss";

export default function Home() {
    return (
        <div className="home">
            <div className="header">
                <Typography.Text className="header-text">
                    All Boards
                </Typography.Text>
                <Button icon={addIcon}>Add</Button>
            </div>
            <BoardsList />
        </div>
    );
}
