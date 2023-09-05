"use client";
import React from "react";

import "./profile.scss";
import OutlinedButton from "@src/Components/OutlinedButton";
import { Button, Divider } from "antd";

type Props = {};

export default function Profile({}: Props) {
    return (
        <div className="profile-container">
            <div className="header">
                <h1 className="heading">Personal info</h1>
                <p className="sub-heading">
                    Basic info, like your name and photo
                </p>
            </div>
            <div className="info-wrapper">
                <div className="info-header">
                    <div className="info">
                        <h2>Profile</h2>
                        <p>Some info may be visible to other people</p>
                    </div>
                    <Button className="edit-btn">Edit</Button>
                </div>
                <Divider className="profile-info-divider" />
            </div>
        </div>
    );
}
