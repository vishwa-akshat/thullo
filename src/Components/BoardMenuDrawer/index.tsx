import React from "react";
import { Drawer } from "antd";

import BoardMenuDrawerHeader from "@src/Components/BoardMenuDrawerHeader";
import BoardAndTaskDescription from "@src/Components/BoardAndTaskDescription";
import BoardMenuDrawerTeamMembers from "@src/Components/BoardMenuDrawerTeamMembers";

import useBoardMenuDrawerStore from "@src/store/boardMenuDrawerState";
import useBoardStore from "@src/store/boardStore";

import "./boardMenuDrawer.scss";

type Props = {};

export default function BoardMenuDrawer({}: Props) {
    const boardMenuDrawerHandleCancel = useBoardMenuDrawerStore(
        (state) => state.boardMenuDrawerHandleCancel
    );
    const isBoardMenuDrawerOpen = useBoardMenuDrawerStore(
        (state) => state.isBoardMenuDrawerOpen
    );

    const currentBoard = useBoardStore((state) => state.currentBoard);

    const updateBoardDescription = useBoardStore(
        (state) => state.updateBoardDescription
    );

    const adminDetail = currentBoard?.members.find(
        (member: any) => member.isAdmin
    );

    return (
        <Drawer
            title={currentBoard?.title}
            className="board-menu-drawer"
            placement="right"
            onClose={boardMenuDrawerHandleCancel}
            open={isBoardMenuDrawerOpen}
            mask={false}
        >
            <BoardMenuDrawerHeader adminDetail={adminDetail} />
            <div className="board-menu-drawer-description">
                <BoardAndTaskDescription
                    className="board-menu-drawer-description"
                    onSubmit={updateBoardDescription}
                    description={currentBoard?.description}
                />
            </div>
            <BoardMenuDrawerTeamMembers members={currentBoard?.members} />
        </Drawer>
    );
}
