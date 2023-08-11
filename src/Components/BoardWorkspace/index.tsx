"use client";

import TaskList from "@src/Components/TaskList";
import ListAndCardAddButton from "@src/Components/ListAndCardAddButton";
import TasksListAddModal from "@src/Components/TasksListAddModal";

import useTaskStore from "@src/store/taskStore";
import useTasksListAddModalStore from "@src/store/tasksListAddModalState";

import "./boardWorkspace.scss";

type Props = {};

export default function BoardWorkspace({}: Props) {
    const showTasksListAddModal = useTasksListAddModalStore(
        (state) => state.showTasksListAddModal
    );

    const tasksList = useTaskStore((state) => state.tasksList);

    return (
        <div className="board-workspace">
            {tasksList.map((col: any) => (
                <TaskList key={col.id} tasks={col} />
            ))}
            <ListAndCardAddButton onClickHandler={showTasksListAddModal}>
                Add another list
            </ListAndCardAddButton>
            <TasksListAddModal />
        </div>
    );
}
