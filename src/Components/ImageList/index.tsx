import React from "react";
import Image from "next/image";

import "./imageList.scss";

type Props = {};

const Images = [
    {
        image: "https://images.unsplash.com/photo-1689890076926-afb4add0bc86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        alt: "cov1",
    },
    {
        image: "https://images.unsplash.com/photo-1689865725935-2a981317abb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        alt: "cov2",
    },
    {
        image: "https://images.unsplash.com/photo-1690040849147-cb9810b8ca3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        alt: "cov3",
    },
    {
        image: "https://images.unsplash.com/photo-1690081541249-5725c2cb5029?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        alt: "cov4",
    },
    {
        image: "https://images.unsplash.com/photo-1689890076926-afb4add0bc86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        alt: "cov5",
    },
    {
        image: "https://images.unsplash.com/photo-1689865725935-2a981317abb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        alt: "cov6",
    },
    {
        image: "https://images.unsplash.com/photo-1690040849147-cb9810b8ca3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        alt: "cov7",
    },
    {
        image: "https://images.unsplash.com/photo-1690081541249-5725c2cb5029?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        alt: "cov8",
    },
    {
        image: "https://images.unsplash.com/photo-1689890076926-afb4add0bc86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        alt: "cov9",
    },
    {
        image: "https://images.unsplash.com/photo-1689865725935-2a981317abb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        alt: "cov10",
    },
    {
        image: "https://images.unsplash.com/photo-1690040849147-cb9810b8ca3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        alt: "cov11",
    },
    {
        image: "https://images.unsplash.com/photo-1690081541249-5725c2cb5029?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        alt: "cov12",
    },
];

export default function ImageList({}: Props) {
    return (
        <div className="images-list">
            {Images.map((image, idx) => (
                <Image
                    className="cover-image"
                    width={55}
                    height={55}
                    key={idx}
                    src={image.image}
                    alt={image.alt}
                />
            ))}
        </div>
    );
}
