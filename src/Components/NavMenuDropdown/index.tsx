import React from "react";
import Link from "next/link";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";

import ProfileInfo from "@src/Components/ProfileInfo";

import useUserStore from "@src/store/user";

import "./navMenuDropDown.scss";

type Props = {};

export default function NavMenuDropDown({}: Props) {
    const logoutUser = useUserStore((state) => state.logoutUser);

    const items: MenuProps["items"] = [
        {
            key: "1",
            label: (
                <Link href="/profile" className="menu-items-text">
                    Profile
                </Link>
            ),
        },
        {
            key: "2",
            danger: true,
            label: (
                <div onClick={logoutUser} className="menu-items-text">
                    Logout
                </div>
            ),
        },
    ];

    return (
        <Dropdown
            className="nav-menu-dropdown"
            menu={{ items }}
            trigger={["click"]}
        >
            <a onClick={(e) => e.preventDefault()}>
                <ProfileInfo />
            </a>
        </Dropdown>
    );
}
