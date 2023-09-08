import React from "react";

import "./profileEditStateUI.scss";

type Props = {
    handleEditGoback: () => void;
};

export default function ProfileEditStateUI({ handleEditGoback }: Props) {
    return (
        <div className="profile-edit-container">
            <div onClick={handleEditGoback} className="back-wrapper">
                Back
            </div>
            <div className="edit-wrapper">
                <div className="header">
                    <h1 className="heading">Personal info</h1>
                    <p className="sub-heading">
                        Basic info, like your name and photo
                    </p>
                </div>
                d
            </div>
        </div>
    );
}
