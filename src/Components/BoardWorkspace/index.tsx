"use client";

import { DragDropContext, DropResult } from "react-beautiful-dnd";

import TaskList from "../TaskList";

import useTaskStore from "@src/store/taskStore";

import "./boardWorkspace.scss";

type Props = {};

export default function BoardWorkspace({}: Props) {
    const [
        backlogTasksId,
        inProgressTasksId,
        inReviewTasksId,
        completedTasksId,
    ] = useTaskStore((state) => [
        state.backlogTasksId,
        state.inProgressTasksId,
        state.inReviewTasksId,
        state.completedTasksId,
    ]);

    function onDragEnd(result: DropResult) {
        throw new Error("Function not implemented.");
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="board-workspace">
                <TaskList title="Backlog 🤔" tasksId={backlogTasksId} />
                <TaskList title="In Progress 📚" tasksId={inProgressTasksId} />
                <TaskList title="In Review ⚙️" tasksId={inReviewTasksId} />
                <TaskList title="Completed 🙌🏽" tasksId={completedTasksId} />
                <div className="">Add another list</div>
            </div>
        </DragDropContext>
    );
}
