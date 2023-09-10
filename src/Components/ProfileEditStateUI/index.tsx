"use client";
import React from "react";
import Image from "next/image";
import { Button, Form, Input } from "antd";

import {
    emailUpdateInputRules,
    phoneNumberUpdateInputRules,
} from "@src/utils/inputRules";

import arrowBackIcon from "@src/assets/arrowBack.svg";

import useUserProfileStore from "@src/store/userProfile";

import "./profileEditStateUI.scss";

type Props = {
    userProfile: any;
    handleEditGoback: () => void;
};

export default function ProfileEditStateUI({
    userProfile,
    handleEditGoback,
}: Props) {
    const updateUserProfileDetails = useUserProfileStore(
        (state) => state.updateUserProfileDetails
    );

    const handleFormSubmit = (values: {
        displayName: string | undefined;
        email: string | undefined;
        bio: string | undefined;
        phoneNumber: string | undefined;
    }) => {
        const details = {};
        const { displayName, email, bio, phoneNumber } = values;

        if (displayName) {
            details["displayName"] = displayName;
        }
        if (bio) {
            details["bio"] = bio;
        }
        if (phoneNumber) {
            details["phoneNumber"] = phoneNumber;
        }
        if (email) {
            details["email"] = email;
        }
        updateUserProfileDetails(details);
        handleEditGoback();
    };

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
                <Form
                    onFinish={handleFormSubmit}
                    className="profile-edit-form"
                    layout="vertical"
                >
                    <Form.Item
                        name="displayName"
                        className="form-item-wrapper"
                        label="Name"
                    >
                        <Input
                            className="profile-edit-input"
                            placeholder="Enter your name..."
                            defaultValue={userProfile?.displayName}
                        />
                    </Form.Item>
                    <Form.Item
                        name="bio"
                        className="form-item-wrapper"
                        label="Bio"
                    >
                        <Input.TextArea
                            className="profile-edit-textarea"
                            placeholder="Enter your bio..."
                            defaultValue={userProfile?.bio}
                        />
                    </Form.Item>
                    <Form.Item
                        name="phoneNumber"
                        className="form-item-wrapper"
                        label="Phone"
                        rules={phoneNumberUpdateInputRules}
                    >
                        <Input
                            className="profile-edit-input"
                            placeholder="Enter your phone..."
                            defaultValue={userProfile?.phoneNumber}
                        />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        className="form-item-wrapper"
                        label="Email"
                        rules={emailUpdateInputRules}
                    >
                        <Input
                            className="profile-edit-input"
                            placeholder="Enter your email..."
                            defaultValue={userProfile?.email}
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
