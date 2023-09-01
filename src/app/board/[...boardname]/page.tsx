"use client";

import React from "react";

import BoardHeader from "@src/Components/BoardHeader";
import BoardWorkspace from "@src/Components/BoardWorkspace";
import TaskAddModal from "@src/Components/TaskAddModal";

import "./board.scss";
import { redirect } from "next/navigation";
import useUserStore from "@src/store/user";
import useBoardStore from "@src/store/boardStore";

type Props = {};

export default function Board({}: Props) {
    const user = useUserStore((state) => state.user);
    const fetchBoardData = useBoardStore((state) => state.fetchBoardData);

    if (!user) {
        redirect("/auth/login");
    }

    React.useEffect(() => {
        fetchBoardData();
    }, []);

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
