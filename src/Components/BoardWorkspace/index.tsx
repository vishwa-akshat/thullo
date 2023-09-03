/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React from "react";
import { useParams } from "next/navigation";
import {
    DndContext,
    DragEndEvent,
    DragStartEvent,
    MouseSensor,
    TouchSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";

import TaskList from "@src/Components/TaskList";
import ListAndCardAddButton from "@src/Components/ListAndCardAddButton";
import TasksListAddModal from "@src/Components/TasksListAddModal";
import TaskNameAddModal from "@src/Components/TaskNameAddModal";
import TasksListRenameModal from "@src/Components/TasksListRenameModal";

import useTasksListAddModalStore from "@src/store/tasksListAddModalState";
import useTaskListStore from "@src/store/taskListStore";
import useBoardStore from "@src/store/boardStore";
import useDnDActionStore from "@src/store/dndActionStore";

import "./boardWorkspace.scss";

type Props = {};

export default function BoardWorkspace({}: Props) {
    const [activeTask, setActiveTask] = React.useState(null);
    const [isDragging, setIsDragging] = React.useState(false);

    const navigationParams = useParams();
    const boardName = navigationParams?.boardname?.replaceAll("%20", " ");

    const boards = useBoardStore((state) => state.boards);
    const setCurrentBoard = useBoardStore((state) => state.setCurrentBoard);
    const currentBoard = useBoardStore((state) => state.currentBoard);

    const handleDragAndDropAction = useDnDActionStore(
        (state) => state.handleDragAndDropAction
    );

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

    const handleDragStart = (event: any) => {
        setActiveTask(event.active.data.current.task);
        setIsDragging(true);
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (over) {
            handleDragAndDropAction(active, over);
            setActiveTask(null);
            setIsDragging(false);
        }
    };

    const mouseSensor = useSensor(MouseSensor, {
        activationConstraint: {
            delay: 80,
            tolerance: 1,
        },
    });
    const touchSensor = useSensor(TouchSensor, {
        activationConstraint: {
            delay: 100,
            tolerance: 1,
        },
    });

    const sensors = useSensors(mouseSensor, touchSensor);

    return (
        <div className="board-workspace">
            <DndContext
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                sensors={sensors}
            >
                {tasksList.map((col: any) => (
                    <TaskList
                        isDragging={isDragging}
                        activeTask={activeTask}
                        key={col.id}
                        tasks={col}
                    />
                ))}
            </DndContext>
            <ListAndCardAddButton onClickHandler={showTasksListAddModal}>
                Add another list
            </ListAndCardAddButton>
            <TasksListAddModal />
            <TaskNameAddModal />
            <TasksListRenameModal />
        </div>
    );
}
