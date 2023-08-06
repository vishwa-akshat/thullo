"use client";
import React from "react";
import { Input } from "antd";

import "./searchInput.scss";

const { Search } = Input;

type Props = {};

export default function SearchInput({}: Props) {
    const onSearch = (value: string) => console.log(value);

    return (
        <Search
            className="search-input"
            placeholder="Keywords...."
            onSearch={onSearch}
            enterButton
            allowClear
        />
    );
}
