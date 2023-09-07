import React from "react";
import Link from "next/link";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";

import ProfileInfo from "@src/Components/ProfileInfo";

import useAuth from "@src/firebase/auth";

import "./navMenuDropDown.scss";

type Props = {};

export default function NavMenuDropDown({}: Props) {
    const { logOut } = useAuth();

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
                <div onClick={logOut} className="menu-items-text">
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
