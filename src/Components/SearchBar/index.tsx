"use client";

import { Input } from "antd";

import "./searchBar.scss";

type Props = {};

const { Search } = Input;

export default function SearchBar({}: Props) {
    return (
        <Search placeholder="Keyword..." enterButton="Search" size="large" />
    );
}
