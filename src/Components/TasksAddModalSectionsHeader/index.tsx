import React from "react";
import Image from "next/image";
import type { UploadProps } from "antd";

import OutlinedButton from "../OutlinedButton";

import descriptionIcon from "@src/assets/description.svg";

import "./tasksAddModalSectionsHeader.scss";
import { Upload } from "antd";

type Props = {
    icon: SVGElement;
    title: string;
    btnText: string;
    iconWidth?: number;
    iconHeight?: number;
    isButtonHid?: Boolean;
    isUploadFeature?: Boolean;
    onClickHandler?: () => void;
    uploadProps?: UploadProps;
};

export default function TasksAddModalSectionsHeader({
    icon,
    title,
    btnText,
    iconWidth,
    iconHeight,
    onClickHandler,
    isButtonHid,
    isUploadFeature,
    uploadProps,
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
            {!isButtonHid && (
                <OutlinedButton
                    width={iconWidth && iconWidth}
                    height={iconHeight && iconHeight}
                    icon={icon}
                    onClickHandler={onClickHandler}
                >
                    {btnText}
                </OutlinedButton>
            )}
            {isUploadFeature && (
                <Upload {...uploadProps}>
                    <OutlinedButton
                        width={iconWidth && iconWidth}
                        height={iconHeight && iconHeight}
                        icon={icon}
                        onClickHandler={onClickHandler}
                    >
                        {btnText}
                    </OutlinedButton>
                </Upload>
            )}
        </div>
    );
}
