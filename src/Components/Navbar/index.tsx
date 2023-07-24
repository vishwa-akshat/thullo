import React from "react";
import Image from "next/image";

import ProfileInfo from "@src/Components/ProfileInfo";
import SearchBar from "@src/Components/SearchBar";

import Logo from "@src/assets/Logo.svg";

import "./navbar.scss";

type Props = {};

export default function Navbar({}: Props) {
    return (
        <div className="navbar">
            <div className="logo-wrapper">
                <Image src={Logo} alt="thullo logo" />
            </div>
            <div className="navbar-options">
                <SearchBar />
                <ProfileInfo />
            </div>
        </div>
    );
}
