"use client";
import { useEffect } from "react";

import "./profile.scss";
import OutlinedButton from "@src/Components/OutlinedButton";
import { Button, Divider } from "antd";
import Image from "next/image";
import useUserProfileStore from "@src/store/userProfile";
import useUserStore from "@src/store/user";
import { redirect } from "next/navigation";
import Avatar from "@src/Components/Avatar";

type Props = {};

export default function Profile({}: Props) {
    const userProfile = useUserProfileStore((state) => state.userProfile);
    const fetchUserProfile = useUserProfileStore(
        (state) => state.fetchUserProfile
    );

    const user = useUserStore((state) => state.user);

    useEffect(() => {
        fetchUserProfile();
    }, []);

    if (!user) {
        redirect("/auth/login");
    }

    if (!userProfile) {
        return <></>;
    }

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
