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
    id: string;
    title: string;
    tasks: any;
};

export default function TaskList({ id, title, tasks }: Props) {
    const [activeTasks, setActiveTasks] = useState(tasks);

    useEffect(() => {
        if (!tasks) {
            setActiveTasks(tasks);
        }
    }, [tasks]);

    return (
        <div className="task-list">
            <div className="task-list-header">
                <Typography.Text className="task-title">
                    {title}
                </Typography.Text>
                <Image width={20} src={moreIcon} alt="more" />
            </div>
            <Droppable droppableId={id}>
                {(provided, snapshot) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="task-droppable-zone"
                    >
                        {activeTasks.length === 0 ? (
                            <></>
                        ) : (
                            activeTasks.map((task, idx) => (
                                <TaskCard id={idx} key={idx} taskData={task} />
                            ))
                        )}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
}
