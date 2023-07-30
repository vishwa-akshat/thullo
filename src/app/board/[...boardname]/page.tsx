import React from "react";

import BoardHeader from "@src/Components/BoardHeader";
import BoardWorkspace from "@src/Components/BoardWorkspace";

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
        </div>
    );
}
