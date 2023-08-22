"use client";
import { useEffect } from "react";
import { Typography } from "antd";

import Button from "@src/Components/Button";
import BoardsList from "@src/Components/BoardsList";
import BoardAddModal from "@src/Components/BoardAddModal";

import addIcon from "@src/assets/add.svg";

import useBoardAddModalStore from "@src/store/boardAddModalState";
import useUserStore from "@src/store/user";
import useBoardStore from "@src/store/boardStore";

import "./home.scss";
import { redirect } from "next/navigation";

export default function Home() {
    const showBoardAddModal = useBoardAddModalStore(
        (state) => state.showBoardAddModal
    );

    const fetchBoardData = useBoardStore((state) => state.fetchBoardData);

    const user = useUserStore((state) => state.user);

    useEffect(() => {
        fetchBoardData();
    }, []);

    if (!user) {
        redirect("/auth/login");
    }

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
