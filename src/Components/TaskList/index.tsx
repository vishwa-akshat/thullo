"use client";
import Image from "next/image";
import { Typography } from "antd";
// import { Droppable } from "react-beautiful-dnd";

import TaskCard from "@src/Components/TaskCard";

import moreIcon from "@src/assets/more.svg";

import "./taskList.scss";
import ListAndCardAddButton from "../ListAndCardAddButton";

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

export default function TaskList({ tasks }: Props) {
    return (
        <div className="task-list">
            <div className="task-list-header">
                <Typography.Text className="task-title">
                    {tasks.title}
                </Typography.Text>
                <Image width={20} src={moreIcon} alt="more" />
            </div>
            {/* <div
                className="task-droppable-zone"
            >
                {tasks.length === 0 ? (
                    <></>
                ) : (
                    tasks.map((task: Tasks, idx: number) => (
                        <TaskCard id={idx} key={idx} taskData={task} />
                    ))
                )}
            </div> */}
            <ListAndCardAddButton onClickHandler={() => null}>
                {tasks?.tasksList?.length === 0
                    ? "Add your card"
                    : "Add another card"}
            </ListAndCardAddButton>
        </div>
    );
}
