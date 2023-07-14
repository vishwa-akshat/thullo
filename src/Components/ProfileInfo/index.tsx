import React from "react";

import Avatar from "@src/Components/Avatar";

import "./profileInfo.scss";

type Props = {};

export default function ProfileInfo({}: Props) {
    return (
        <div className="profile-info-wrapper">
            <Avatar />
        </div>
    );
}
