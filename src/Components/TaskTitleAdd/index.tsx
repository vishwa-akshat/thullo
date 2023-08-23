import React from "react";
import { Button as AntButton, Form, Input } from "antd";

import useTaskAddStore from "@src/store/taskAddStore";

import "./taskTitleAdd.scss";

type Props = {
    setIsTitleEditing: (bool: boolean) => void;
};

export default function TaskTitleAdd({ setIsTitleEditing }: Props) {
    const setTitle = useTaskAddStore((state) => state.setTitle);

    const handleInputSubmit = (values: { title: string }) => {
        setTitle(values.title);
        setIsTitleEditing(false);
    };

    return (
        <Form onFinish={handleInputSubmit} className="task-title-add-wrapper">
            <Form.Item name="title">
                <Input placeholder="Enter your task title" />
            </Form.Item>
            <div className="btn-wrapper">
                <Form.Item>
                    <AntButton htmlType="submit" type="primary">
                        Confirm
                    </AntButton>
                </Form.Item>
                <AntButton danger onClick={() => setIsTitleEditing(false)}>
                    Cancel
                </AntButton>
            </div>
        </Form>
    );
}
