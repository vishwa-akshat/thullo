import React from "react";
import { message } from "antd";
import type { UploadProps } from "antd";

import TasksAddModalSectionsHeader from "@src/Components/TasksAddModalSectionsHeader";
import TaskAttachmentsViewList from "@src/Components/TaskAttachmentsViewList";

import plusIcon from "@src/assets/addGrey.svg";

import "./taskAttachment.scss";

type Props = {};

export default function TaskAttachment({}: Props) {
    const props: UploadProps = {
        // action: "/",
        // onChange(info) {
        //     console.log(info);
        // },
        customRequest(otions) {
            console.log(otions);
        },
        onPreview(file) {
            console.log(file);
        },
        showUploadList: false,
    };

    return (
        <div className="task-attachment">
            <TasksAddModalSectionsHeader
                icon={plusIcon}
                btnText="Add"
                title="Attachments"
                iconWidth={18}
                iconHeight={18}
                isUploadFeature={true}
                uploadProps={props}
                isButtonHid={true}
                onClickHandler={() => null}
            />
            <div className="attachment-content-wrapper">
                <TaskAttachmentsViewList />
            </div>
        </div>
    );
}
