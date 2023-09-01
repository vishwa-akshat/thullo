"use client";
import React from "react";
import { useParams } from "next/navigation";

import TaskList from "@src/Components/TaskList";
import ListAndCardAddButton from "@src/Components/ListAndCardAddButton";
import TasksListAddModal from "@src/Components/TasksListAddModal";
import TaskNameAddModal from "@src/Components/TaskNameAddModal";

import useTasksListAddModalStore from "@src/store/tasksListAddModalState";
import useTaskListStore from "@src/store/taskListStore";
import useBoardStore from "@src/store/boardStore";

import "./boardWorkspace.scss";

type Props = {};

export default function BoardWorkspace({}: Props) {
    const navigationParams = useParams();
    const boardName = navigationParams?.boardname?.replaceAll("%20", " ");

    const boards = useBoardStore((state) => state.boards);
    const setCurrentBoard = useBoardStore((state) => state.setCurrentBoard);
    const currentBoard = useBoardStore((state) => state.currentBoard);

    const showTasksListAddModal = useTasksListAddModalStore(
        (state) => state.showTasksListAddModal
    );

    const fetchTaskListsData = useTaskListStore(
        (state) => state.fetchTaskListsData
    );
    const tasksList = useTaskListStore((state) => state.taskLists);

    React.useEffect(() => {
        if (currentBoard === null && boards.length > 0) {
            const requiredBoard = boards.filter(
                (board) => board.title === boardName
            );
            setCurrentBoard(requiredBoard[0]);
        } else if (currentBoard !== null) {
            fetchTaskListsData();
        }
    }, [boards]);

    React.useEffect(() => {
        if (currentBoard !== null) {
            fetchTaskListsData();
        }
    }, [currentBoard]);

    return (
        <div className="board-workspace">
            {tasksList.map((col: any) => (
                <TaskList key={col.id} tasks={col} />
            ))}
            <ListAndCardAddButton onClickHandler={showTasksListAddModal}>
                Add another list
            </ListAndCardAddButton>
            <TasksListAddModal />
            <TaskNameAddModal />
        </div>
    );
}
