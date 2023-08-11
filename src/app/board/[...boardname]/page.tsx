"use client";

import React from "react";

import BoardHeader from "@src/Components/BoardHeader";
import BoardWorkspace from "@src/Components/BoardWorkspace";
import TaskAddModal from "@src/Components/TaskAddModal";

import "./board.scss";

type Props = {};

export default function Board({}: Props) {
    return (
        <div className="board-container">
            <div className="board-header-wrapper">
                <BoardHeader />
            </div>
            <div className="board-workspace-wrapper">
                <BoardWorkspace />
            </div>
            <TaskAddModal />
        </div>
    );
}
