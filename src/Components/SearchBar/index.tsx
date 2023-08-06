"use client";

import { Input } from "antd";

import "./searchBar.scss";

type Props = {};

const { Search } = Input;

export default function SearchBar({}: Props) {
    return (
        <div className="search-bar-wrapper">
            <Search
                placeholder="Keyword..."
                enterButton="Search"
                size="large"
            />
        </div>
    );
}
