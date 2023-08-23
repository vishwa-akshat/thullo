"use client";
import React from "react";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import { Divider } from "antd";

import SearchBar from "@src/Components/SearchBar";
import GhostButton from "@src/Components/GhostButton";
import NavMenuDropDown from "@src/Components/NavMenuDropdown";

import Logo from "@src/assets/Logo.svg";
import appLogo from "@src/assets/apps.svg";

import "./navbar.scss";

type Props = {};

export default function Navbar({}: Props) {
    const navigationParams = useParams();
    const pathname = usePathname();
    const isLoginPage = pathname === "/auth/login";
    const isSignUpPage = pathname === "/auth/sign-up";
    const boardName = navigationParams?.boardname?.replaceAll("%20", " ");

    if (isLoginPage || isSignUpPage) {
        return <></>;
    }

    return (
        <div className="navbar">
            <div className="logo-wrapper">
                <Image src={Logo} alt="thullo logo" />
            </div>
            {Object.keys(navigationParams).length !== 0 && (
                <div className="board-nav-info">
                    <p>{boardName}</p>
                    <Divider type="vertical" />
                    <GhostButton icon={appLogo} onClickHandler={() => null}>
                        All board
                    </GhostButton>
                </div>
            )}
            <div className="navbar-options">
                <SearchBar />
                <NavMenuDropDown />
            </div>
        </div>
    );
}
