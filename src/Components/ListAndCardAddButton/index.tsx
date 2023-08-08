import React from "react";

import addIcon from "@src/assets/addBlue.svg";

import "./listAndCardAddButton.scss";
import Image from "next/image";

type Props = { children: string };

export default function ListAndCardAddButton({ children }: Props) {
    return (
        <div className="list-and-card-add-button">
            {children}
            <Image src={addIcon} width={20} height={20} alt="add" />
        </div>
    );
}
