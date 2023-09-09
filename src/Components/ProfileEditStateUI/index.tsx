"use client";
import React from "react";
import Image from "next/image";

import arrowBackIcon from "@src/assets/arrowBack.svg";

import "./profileEditStateUI.scss";
import { Button, Form, Input } from "antd";

type Props = {
    handleEditGoback: () => void;
};

export default function ProfileEditStateUI({ handleEditGoback }: Props) {
    return (
        <div className="profile-edit-container">
            <div onClick={handleEditGoback} className="back-wrapper">
                <Image
                    width={20}
                    height={20}
                    src={arrowBackIcon}
                    alt="arrow back"
                />
                Back
            </div>
            <div className="edit-wrapper">
                <div className="header">
                    <h1 className="heading">Change Info</h1>
                    <p className="sub-heading">
                        Changes will be reflected to every services
                    </p>
                </div>
                <Form className="profile-edit-form" layout="vertical">
                    <Form.Item className="form-item-wrapper" label="Name">
                        <Input
                            className="profile-edit-input"
                            placeholder="Enter your name..."
                        />
                    </Form.Item>
                    <Form.Item className="form-item-wrapper" label="Bio">
                        <Input.TextArea
                            className="profile-edit-textarea"
                            placeholder="Enter your bio..."
                        />
                    </Form.Item>
                    <Form.Item className="form-item-wrapper" label="Phone">
                        <Input
                            className="profile-edit-input"
                            placeholder="Enter your phone..."
                        />
                    </Form.Item>
                    <Form.Item className="form-item-wrapper" label="Email">
                        <Input
                            className="profile-edit-input"
                            placeholder="Enter your email..."
                        />
                    </Form.Item>
                    <Form.Item className="form-item-wrapper">
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="form-save-btn"
                        >
                            Save
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
