"use client";

import TaskList from "@src/Components/TaskList";
import ListAndCardAddButton from "@src/Components/ListAndCardAddButton";
import TasksListAddModal from "@src/Components/TasksListAddModal";

import useTaskStore from "@src/store/taskStore";
import useTasksListAddModalStore from "@src/store/tasksListAddModalState";
import useBoardStore from "@src/store/boardStore";

import "./boardWorkspace.scss";

type Props = {};

export default function BoardWorkspace({}: Props) {
    const showTasksListAddModal = useTasksListAddModalStore(
        (state) => state.showTasksListAddModal
    );

    const currentBoard = useBoardStore((state) => state.currentBoard);

    return (
        <div className="board-workspace">
            {currentBoard?.columns?.map((col: any) => (
                <TaskList tasks={col} />
            ))}
            <ListAndCardAddButton onClickHandler={showTasksListAddModal}>
                Add another list
            </ListAndCardAddButton>
            <TasksListAddModal />
        </div>
    );
}
