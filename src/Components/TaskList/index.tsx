"use client";
import { useEffect, useState } from "react";
import { Typography } from "antd";
import { useDroppable, DragOverlay } from "@dnd-kit/core";

import TaskCard from "@src/Components/TaskCard";
import ListAndCardAddButton from "@src/Components/ListAndCardAddButton";
import TaskListColDropdown from "@src/Components/TaskListColDropdown";

import useTaskNameAddModalStore from "@src/store/taskNameAddModalState";
import useTaskListStore from "@src/store/taskListStore";
import useTasksStore from "@src/store/tasksStore";

import "./taskList.scss";

type Tasks = {
    id: string;
    image: string;
    title: string;
    tags: { name: string; color: string }[];
    attachments: number;
    comments: number;
    members: {
        name: string;
        avatar: string;
    }[];
};

type Props = {
    tasks: any;
};

export default function TaskList({ tasks, activeTask, isDragging }: Props) {
    const [taskArr, setTasksArr] = useState([]);

    const { isOver, setNodeRef } = useDroppable({
        id: `droppable-${tasks.id}`,
        data: {
            taskListId: tasks.firebaseDocId,
            title: tasks.title,
        },
    });

    const fetchTasksData = useTasksStore((state) => state.fetchTasksData);
    const tasksArray = useTasksStore((state) => state.tasksArray);

    useEffect(() => {
        fetchTasksData(tasks?.firebaseDocId);
    }, []);

    useEffect(() => {
        const reqArr = tasksArray.filter(
            (task) => task.taskListId === tasks.firebaseDocId
        );
        if (reqArr.length > 0) {
            setTasksArr(reqArr[0].tasks);
        }
    }, [tasksArray]);

    const showTaskNameAddModal = useTaskNameAddModalStore(
        (state) => state.showTaskNameAddModal
    );

    const setActiveTaskList = useTaskListStore(
        (state) => state.setCurrentTaskList
    );

    const handleBtnClick = () => {
        setActiveTaskList(tasks);
        showTaskNameAddModal();
    };

    return (
        <div className="task-list" ref={setNodeRef}>
            <div className="task-list-header">
                <Typography.Text className="task-title">
                    {tasks.title}
                </Typography.Text>
                <TaskListColDropdown id={tasks.id} />
            </div>
            {isDragging ? (
                <DragOverlay>
                    <TaskCard
                        currentTasklist={tasks}
                        taskData={activeTask}
                        id={0}
                    />
                </DragOverlay>
            ) : null}
            <div className="task-droppable-zone">
                {taskArr.length === 0 ? (
                    <></>
                ) : (
                    taskArr.map((task: Tasks, idx: number) => (
                        <TaskCard
                            id={idx}
                            key={idx}
                            taskData={task}
                            currentTasklist={tasks}
                        />
                    ))
                )}
            </div>
            <div className="task-add-button-wrapper">
                <ListAndCardAddButton onClickHandler={handleBtnClick}>
                    {tasks?.tasksList?.length === 0
                        ? "Add your card"
                        : "Add another card"}
                </ListAndCardAddButton>
            </div>
        </div>
    );
}
