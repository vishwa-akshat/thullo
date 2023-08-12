import React from "react";
import Image from "next/image";

import OutlinedButton from "../OutlinedButton";

import descriptionIcon from "@src/assets/description.svg";

import "./tasksAddModalSectionsHeader.scss";

type Props = {
    icon: SVGElement;
    title: string;
    btnText: string;
    iconWidth: number;
    iconHeight: number;
};

export default function TasksAddModalSectionsHeader({
    icon,
    title,
    btnText,
    iconWidth,
    iconHeight,
}: Props) {
    return (
        <div className="task-add-modal-sections-header">
            <div className="title-wrapper">
                <Image
                    width={14}
                    height={14}
                    src={descriptionIcon}
                    alt="description"
                />
                <p className="title">{title}</p>
            </div>
            <OutlinedButton
                width={iconWidth && iconWidth}
                height={iconHeight && iconHeight}
                icon={icon}
                onClickHandler={() => null}
            >
                {btnText}
            </OutlinedButton>
        </div>
    );
}
