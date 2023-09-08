import React from "react";

import "./profileDataUI.scss";
import { Button, Divider } from "antd";
import Avatar from "../Avatar";

type Props = {
    userProfile: any;
    handleEditBtnClick: () => void;
};

export default function ProfileDataUI({
    handleEditBtnClick,
    userProfile,
}: Props) {
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
                    <Button onClick={handleEditBtnClick} className="edit-btn">
                        Edit
                    </Button>
                </div>
                <Divider className="profile-info-divider" />
                <div className="data-block pd-sm">
                    <div className="data-name">Photo</div>
                    <div className="data-value">
                        {userProfile.photoURL ? (
                            <Avatar size={72} src={userProfile?.photoURL} />
                        ) : (
                            <Avatar size={72} name={userProfile?.displayName} />
                        )}
                    </div>
                </div>
                <Divider className="profile-info-divider" />
                <div className="data-block">
                    <div className="data-name">Name</div>
                    <div className="data-value">{userProfile?.displayName}</div>
                </div>
                <Divider className="profile-info-divider" />
                <div className="data-block">
                    <div className="data-name">Bio</div>
                    <div className="data-value">
                        {userProfile.bio ? userProfile.bio : "no bio"}
                    </div>
                </div>
                <Divider className="profile-info-divider" />
                <div className="data-block">
                    <div className="data-name">Phone</div>
                    <div className="data-value">
                        {userProfile.phoneNumber
                            ? userProfile.phoneNumber
                            : "no phoneNumber"}
                    </div>
                </div>
                <Divider className="profile-info-divider" />
                <div className="data-block">
                    <div className="data-name">Email</div>
                    <div className="data-value">{userProfile?.email}</div>
                </div>
                <Divider className="profile-info-divider" />
            </div>
        </div>
    );
}
