import React from "react";
import Image from "next/image";

import { DayMonthYear } from "@src/utils/formateDate";

import userIcon from "@src/assets/accountUser.svg";

import "./boardMenuDrawerHeader.scss";

type Props = {
    adminDetail: any;
};

export default function BoardMenuDrawerHeader({ adminDetail }: Props) {
    return (
        <div className="board-menu-drawer-header">
            <div className="made-by-wrapper">
                <Image width={12} height={12} src={userIcon} alt="user icon" />
                Made by
            </div>
            <div className="drawer-admin-info-wrapper">
                <Image
                    className="admin-image"
                    width={32}
                    height={32}
                    src={adminDetail?.photoURL}
                    alt="user icon"
                />
                <div className="admin-info">
                    <p className="admin-name">{adminDetail?.displayName}</p>
                    <p className="date-created-at">
                        on {DayMonthYear(adminDetail?.createdAt)}
                    </p>
                </div>
            </div>
        </div>
    );
}
