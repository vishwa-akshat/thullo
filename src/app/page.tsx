"use client";
import { Typography } from "antd";

import Button from "@src/Components/Button";
import BoardsList from "@src/Components/BoardsList";
import BoardAddModal from "@src/Components/BoardAddModal";

import addIcon from "@src/assets/add.svg";

import useBoardAddModalStore from "@src/store/boardAddModalState";

import "./home.scss";

export default function Home() {
    const showBoardAddModal = useBoardAddModalStore(
        (state) => state.showBoardAddModal
    );

    return (
        <div className="home">
            <div className="header">
                <Typography.Text className="header-text">
                    All Boards
                </Typography.Text>
                <Button onClickHandler={showBoardAddModal} icon={addIcon}>
                    Add
                </Button>
            </div>
            <BoardsList />
            <BoardAddModal />
        </div>
    );
}
