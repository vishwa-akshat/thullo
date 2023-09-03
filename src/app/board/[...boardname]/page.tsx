"use client";

import React from "react";
import { redirect } from "next/navigation";

import BoardHeader from "@src/Components/BoardHeader";
import BoardWorkspace from "@src/Components/BoardWorkspace";
import TaskAddModal from "@src/Components/TaskAddModal";
import VisibilityModal from "@src/Components/VisibilityModal";

import useUserStore from "@src/store/user";
import useBoardStore from "@src/store/boardStore";
import useVisibilityModalStore from "@src/store/visibilityModalState";

import "./board.scss";

type Props = {};

export default function Board({}: Props) {
    const user = useUserStore((state) => state.user);
    const fetchBoardData = useBoardStore((state) => state.fetchBoardData);

    const {
        isVisibilityModalOpen,
        visibilityModalHandleCancel,
        visibilityModalHandleOk,
    } = useVisibilityModalStore();

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
            <VisibilityModal
                isOpen={isVisibilityModalOpen}
                handleCancel={visibilityModalHandleCancel}
                handleOk={visibilityModalHandleOk}
                topPosition={180}
                leftPosition={-580}
                isUpdate={true}
            />
        </div>
    );
}
