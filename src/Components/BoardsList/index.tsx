import React from "react";

import BoardCard from "@src/Components/BoardCard";

import useBoardStore from "@src/store/boardStore";
import useBoardAddModalStore from "@src/store/boardAddModalState";

import "./boardList.scss";

type Props = {};

export default function BoardsList({}: Props) {
    const boards = useBoardStore((state) => state.boards);

    const showBoardAddModal = useBoardAddModalStore(
        (state) => state.showBoardAddModal
    );

    if (boards.length <= 0) {
        return (
            <div className="empty-board-state" onClick={showBoardAddModal}>
                Create a new board
            </div>
        );
    }

    return (
        <div className="boards-wrapper">
            {boards.map((data, index) => (
                <BoardCard key={index} cardData={data} />
            ))}
        </div>
    );
}
