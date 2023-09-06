"use client";
import React from "react";

import "./profile.scss";
import OutlinedButton from "@src/Components/OutlinedButton";
import { Button, Divider } from "antd";
import Image from "next/image";

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
                <div className="data-block pd-sm">
                    <div className="data-name">Photo</div>
                    <div className="data-value">
                        <Image
                            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
                            width={72}
                            height={72}
                            alt="avatar"
                        />
                    </div>
                </div>
                <Divider className="profile-info-divider" />
                <div className="data-block">
                    <div className="data-name">Name</div>
                    <div className="data-value">Xanthe Neal</div>
                </div>
                <Divider className="profile-info-divider" />
                <div className="data-block">
                    <div className="data-name">Bio</div>
                    <div className="data-value">I am a software developer</div>
                </div>
                <Divider className="profile-info-divider" />
                <div className="data-block">
                    <div className="data-name">Phone</div>
                    <div className="data-value">90854654564</div>
                </div>
                <Divider className="profile-info-divider" />
                <div className="data-block">
                    <div className="data-name">Email</div>
                    <div className="data-value">xanthe.neal@gmail.com</div>
                </div>
                <Divider className="profile-info-divider" />
            </div>
        </div>
    );
}
