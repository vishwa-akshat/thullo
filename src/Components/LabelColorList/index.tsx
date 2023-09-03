import React from "react";

import "./labelColorList.scss";

type Props = {
    color: string;
    setColor: (value: string) => void;
};

export default function LabelColorList({ color, setColor }: Props) {
    const colors = [
        {
            colorCode: "#c41d7f",
            colorName: "magenta",
        },
        {
            colorCode: "#d9434e",
            colorName: "red",
        },
        {
            colorCode: "#d4380d",
            colorName: "volcano",
        },
        {
            colorCode: "#d46b08",
            colorName: "orange",
        },
        {
            colorCode: "#d48806",
            colorName: "gold",
        },
        {
            colorCode: "#9ac439",
            colorName: "lime",
        },
        {
            colorCode: "#389e0d",
            colorName: "green",
        },
        {
            colorCode: "#08979c",
            colorName: "cyan",
        },
        {
            colorCode: "#0958d9",
            colorName: "blue",
        },
        {
            colorCode: "#1d39c4",
            colorName: "geekblue",
        },
        {
            colorCode: "#531dab",
            colorName: "purple",
        },
    ];

    const handleColorClick = (colour: {
        colorCode?: string;
        colorName: string;
    }) => {
        setColor(colour.colorName);
    };

    return (
        <div className="label-color-list">
            {colors.map((colour, idx) => (
                <div
                    onClick={() => handleColorClick(colour)}
                    className={
                        color === colour.colorName
                            ? "active-color color-block"
                            : "color-block"
                    }
                    key={idx}
                    style={{ background: colour.colorCode }}
                />
            ))}
        </div>
    );
}
