"use client";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

import ProfileEditStateUI from "@src/Components/ProfileEditStateUI";
import ProfileDataUI from "@src/Components/ProfileDataUI";

import useUserProfileStore from "@src/store/userProfile";
import useUserStore from "@src/store/user";

import "./profile.scss";

type Props = {};

export default function Profile({}: Props) {
    const [isEdit, setIsEdit] = useState(false);

    const user = useUserStore((state) => state.user);

    const { userProfile, fetchUserProfile } = useUserProfileStore();

    useEffect(() => {
        fetchUserProfile();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!user) {
        redirect("/auth/login");
    }

    if (!userProfile) {
        return <></>;
    }

    const handleEditBtnClick = () => {
        setIsEdit(true);
    };
    const handleEditGoback = () => {
        setIsEdit(false);
    };

    return (
        <>
            {isEdit ? (
                <ProfileEditStateUI
                    userProfile={userProfile}
                    handleEditGoback={handleEditGoback}
                />
            ) : (
                <ProfileDataUI
                    handleEditBtnClick={handleEditBtnClick}
                    userProfile={userProfile}
                />
            )}
        </>
    );
}
