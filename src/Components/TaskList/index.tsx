"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Typography } from "antd";
import { Droppable } from "react-beautiful-dnd";

import TaskCard from "@src/Components/TaskCard";

import moreIcon from "@src/assets/more.svg";

import useTaskStore from "@src/store/taskStore";

import "./taskList.scss";

type Tasks = {};

type Props = {
    title: string;
    tasksId: any;
};

export default function TaskList({ title, tasksId }: Props) {
    const [tasks, setTasks] = useState([]);

    const getTasks = useTaskStore((state) => state.getTasks);

    useEffect(() => {
        const resTasks = getTasks(tasksId);
        setTasks(resTasks);
    }, []);

    if (tasks.length === 0) return <></>;

    return (
        <div className="task-list">
            <div className="task-list-header">
                <Typography.Text className="task-title">
                    {title}
                </Typography.Text>
                <Image width={20} src={moreIcon} alt="more" />
            </div>
            <Droppable droppableId="droppable-1">
                {(provided, snapshot) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="task-droppable-zone"
                    >
                        {tasks.map((task, idx) => (
                            <TaskCard key={idx} taskData={task} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
}
