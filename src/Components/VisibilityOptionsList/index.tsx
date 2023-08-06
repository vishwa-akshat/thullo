import React from "react";
import Image from "next/image";

import useVisibilityModalStore from "@src/store/visibilityModalState";

import publicIcon from "@src/assets/public.svg";
import lockIcon from "@src/assets/lock.svg";

import "./visibilityOptionsList.scss";

type Props = {};

const visibilityOption = [
    {
        name: "Public",
        icon: publicIcon,
        description: "Anyone on the internet can see this.",
    },
    {
        name: "Private",
        icon: lockIcon,
        description: "Only board members can see this.",
    },
];

export default function VisibilityOptionsList({}: Props) {
    const visibilityModalHandleOk = useVisibilityModalStore(
        (state) => state.visibilityModalHandleOk
    );

    return (
        <div className="option-wrapper">
            {visibilityOption.map((option, idx) => (
                <div
                    onClick={() => visibilityModalHandleOk(option.name)}
                    key={idx}
                    className="option"
                >
                    <div className="visibility-type">
                        <Image
                            width={14}
                            height={14}
                            src={option.icon}
                            alt="public"
                        />
                        <p className="visibility-option-text">{option.name}</p>
                    </div>
                    <p className="visibility-info">{option.description}</p>
                </div>
            ))}
        </div>
    );
}
