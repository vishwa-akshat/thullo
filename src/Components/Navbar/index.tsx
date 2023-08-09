"use client";
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Divider } from "antd";

import ProfileInfo from "@src/Components/ProfileInfo";
import SearchBar from "@src/Components/SearchBar";
import GhostButton from "@src/Components/GhostButton";

import Logo from "@src/assets/Logo.svg";
import appLogo from "@src/assets/apps.svg";

import "./navbar.scss";

type Props = {};

export default function Navbar({}: Props) {
    const navigationParams = useParams();

    console.log(navigationParams);

    return (
        <div className="navbar">
            <div className="logo-wrapper">
                <Image src={Logo} alt="thullo logo" />
            </div>
            {Object.keys(navigationParams).length !== 0 && (
                <div className="board-nav-info">
                    <p>{`${navigationParams.boardname}`}</p>
                    <Divider type="vertical" />
                    <GhostButton icon={appLogo} onClickHandler={() => null}>
                        All board
                    </GhostButton>
                </div>
            )}
            <div className="navbar-options">
                <SearchBar />
                <ProfileInfo />
            </div>
        </div>
    );
}
