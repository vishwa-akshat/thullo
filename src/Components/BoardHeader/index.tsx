"use client";
import React from "react";

import GhostButton from "@src/Components/GhostButton";
import BoardTeamMembers from "@src/Components/BoardTeamMembers";

import moreIcon from "@src/assets/more.svg";
import lockIcon from "@src/assets/lock.svg";

import "./boardHeader.scss";

type Props = {};

export default function BoardHeader({}: Props) {
    return (
        <div className="board-header">
            <div className="team-members">
                <GhostButton icon={lockIcon} onClickHandler={() => null}>
                    Private
                </GhostButton>
                <BoardTeamMembers />
            </div>
            <GhostButton icon={moreIcon} onClickHandler={() => null}>
                Show Menu
            </GhostButton>
        </div>
    );
}
