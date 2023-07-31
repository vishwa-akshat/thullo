"use client";

import { DragDropContext } from "react-beautiful-dnd";

import "./boardWorkspace.scss";
import TaskList from "../TaskList";

type Props = {};

export default function BoardWorkspace({}: Props) {
    return (
        <DragDropContext
        // onBeforeCapture={onBeforeCapture}
        // onBeforeDragStart={onBeforeDragStart}
        // onDragStart={onDragStart}
        // onDragUpdate={onDragUpdate}
        // onDragEnd={onDragEnd}
        >
            <div className="board-workspace">
                <TaskList listType="backlog" />
                <div className="">In Progress 📚T</div>
                <div className="">In Review ⚙️</div>
                <div className="">Completed 🙌🏽</div>
                <div className="">Add another list</div>
            </div>
        </DragDropContext>
    );
}
