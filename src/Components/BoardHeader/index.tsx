"use client";
import React from "react";

import GhostButton from "@src/Components/GhostButton";
import BoardTeamMembers from "@src/Components/BoardTeamMembers";

import moreIcon from "@src/assets/more.svg";
import lockIcon from "@src/assets/lock.svg";

import useVisibilityModalStore from "@src/store/visibilityModalState";
import useBoardStore from "@src/store/boardStore";

import "./boardHeader.scss";

type Props = {};

const Members = [
    {
        name: "Suzie",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    },
    {
        name: "Reh",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
        name: "drake",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
        name: "Rengaku Ade",
        avatar: "",
    },
];

export default function BoardHeader({}: Props) {
    const { showVisibilityModal } = useVisibilityModalStore();

    const currentBoard = useBoardStore((state) => state.currentBoard);
    const boards = useBoardStore((state) => state.boards);

    const filteredBoard = boards.filter(
        (board) => board?.id === currentBoard?.id
    );

    return (
        <div className="board-header">
            <div className="team-members">
                <GhostButton
                    icon={lockIcon}
                    onClickHandler={showVisibilityModal}
                >
                    {filteredBoard[0]?.visibility}
                </GhostButton>
                {/* <BoardTeamMembers members={Members} /> */}
            </div>
            <GhostButton icon={moreIcon} onClickHandler={() => null}>
                Show Menu
            </GhostButton>
        </div>
    );
}
