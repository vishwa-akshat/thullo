"use client";

import TaskList from "@src/Components/TaskList";
import ListAndCardAddButton from "@src/Components/ListAndCardAddButton";

import useTaskStore from "@src/store/taskStore";

import "./boardWorkspace.scss";

type Props = {};

export default function BoardWorkspace({}: Props) {
    // const [
    //     backlogTasks,
    //     progressTasks,
    //     reviewTasks,
    //     completedTasks,
    //     updateTasksStack,
    // ] = useTaskStore((state) => [
    //     state.backlogTasks,
    //     state.progressTasks,
    //     state.reviewTasks,
    //     state.completedTasks,
    //     state.updateTasksStack,
    // ]);

    // const tasksColumns = [
    //     {
    //         id: "backlog",
    //         title: "Backlog 🤔",
    //         tasks: backlogTasks,
    //     },
    //     {
    //         id: "progress",
    //         title: "In Progress 📚",
    //         tasks: progressTasks,
    //     },
    //     {
    //         id: "review",
    //         title: "In Review ⚙️",
    //         tasks: reviewTasks,
    //     },
    //     {
    //         id: "completed",
    //         title: "Completed 🙌🏽",
    //         tasks: completedTasks,
    //     },
    // ];

    // function onDragEnd(result: DropResult) {
    //     const { destination, source } = result;
    //     if (destination === null) return;
    //     updateTasksStack(destination, source);
    // }

    return (
        // <DragDropContext onDragEnd={onDragEnd}>
        <div className="board-workspace">
            {/* {tasksColumns.map((col) => (
                <TaskList
                    key={col.id}
                    id={col.id}
                    title={col.title}
                    tasks={col.tasks}
                />
            ))} */}
            <ListAndCardAddButton>Add another list</ListAndCardAddButton>
        </div>
        // </DragDropContext>
    );
}
