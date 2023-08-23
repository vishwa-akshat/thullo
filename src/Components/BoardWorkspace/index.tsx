"use client";
import React from "react";
import { useParams } from "next/navigation";

import TaskList from "@src/Components/TaskList";
import ListAndCardAddButton from "@src/Components/ListAndCardAddButton";
import TasksListAddModal from "@src/Components/TasksListAddModal";

import useTasksListAddModalStore from "@src/store/tasksListAddModalState";
import useBoardStore from "@src/store/boardStore";

import "./boardWorkspace.scss";

type Props = {};

export default function BoardWorkspace({}: Props) {
    const navigationParams = useParams();
    const showTasksListAddModal = useTasksListAddModalStore(
        (state) => state.showTasksListAddModal
    );
    const boards = useBoardStore((state) => state.boards);
    const fetchBoardData = useBoardStore((state) => state.fetchBoardData);

    const currentBoard = useBoardStore((state) => state.currentBoard);
    const setCurrentBoard = useBoardStore((state) => state.setCurrentBoard);

    React.useEffect(() => {
        fetchBoardData();
    }, []);

    React.useEffect(() => {
        const boardTitle = navigationParams.boardname.replaceAll("%20", " ");
        const requiredBoard = boards.filter(
            (board) => board.title === boardTitle
        );
        setCurrentBoard(requiredBoard[0]);
    }, [boards]);

    return (
        <div className="board-workspace">
            {currentBoard?.columns?.map((col: any) => (
                <TaskList key={col.id} tasks={col} />
            ))}
            <ListAndCardAddButton onClickHandler={showTasksListAddModal}>
                Add another list
            </ListAndCardAddButton>
            <TasksListAddModal />
        </div>
    );
}
