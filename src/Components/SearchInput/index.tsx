"use client";
import React from "react";
import { Input } from "antd";

import useCoverPhotosStore from "@src/store/coverPhotosStore";

import "./searchInput.scss";

const { Search } = Input;

type Props = {};

export default function SearchInput({}: Props) {
    const getSearchedPhotos = useCoverPhotosStore(
        (state) => state.getSearchedPhotos
    );

    const onSearch = (value: string) => {
        if (value !== "") {
            getSearchedPhotos(value);
        }
    };

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
