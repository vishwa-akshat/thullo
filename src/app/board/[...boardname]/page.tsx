import React from "react";

import BoardHeader from "@src/Components/BoardHeader";

import "./board.scss";

type Props = {};

export default function Board({}: Props) {
    return (
        <div className="board-container">
            <div className="board-header-wrapper">
                <BoardHeader />
            </div>
        </div>
    );
}
