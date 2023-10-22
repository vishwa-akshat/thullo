"use client";
import React from "react";
import Image from "next/image";
import { message, Upload } from "antd";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import type { RcFile } from "antd/es/upload/interface";
import { updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";

import Avatar from "@src/Components/Avatar";

import cameraIcon from "@src/assets/camera.svg";

import useAuth from "@src/firebase/auth";
import { auth, db } from "@src/firebase/config";

import useUserProfileStore from "@src/store/userProfile";

import "./profilePictureUpload.scss";

type Props = {};

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result as string));
    reader.readAsDataURL(img);
};

export default function ProfilePictureUpload({}: Props) {
    const [loading, setLoading] = React.useState(false);
    const [imageUrl, setImageUrl] = React.useState<string>();

    const fetchUserProfile = useUserProfileStore(
        (state) => state.fetchUserProfile
    );

    const { user } = useAuth();

    const beforeUpload = (file: RcFile) => {
        const isJpgOrPng =
            file.type === "image/jpeg" || file.type === "image/png";
        if (!isJpgOrPng) {
            message.error("You can only upload JPG/PNG file!");
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error("Image must smaller than 2MB!");
        }
        handleUpload(file);
        return isJpgOrPng && isLt2M;
    };

    const handleUpload = async (file: RcFile) => {
        try {
            const storage = getStorage();
            const metadata = {
                contentType: "image/jpeg",
            };
            const storageRef = ref(
                storage,
                `users/${user.uid}/profilePictures`
            );

            const snapshot = await uploadBytesResumable(
                storageRef,
                file,
                metadata
            );

            const downloadURL = await getDownloadURL(snapshot.ref);

            const { currentUser }: any = auth;

            await updateProfile(currentUser, {
                photoURL: downloadURL,
            });

            const userDocRef = doc(db, "users", user.uid);

            await updateDoc(userDocRef, {
                photoURL: downloadURL,
            });
            fetchUserProfile();
            setImageUrl(downloadURL);
        } catch (error) {
            console.error("Error uploading profile picture:", error);
        }
    };

    const uploadComp = (
        <div className="upload-element-wrapper">
            <Avatar src={user?.photoURL} name={user?.displayName} size={72} />
            <div className="overlay">
                <Image src={cameraIcon} alt="upload" width={24} height={24} />
            </div>
        </div>
    );

    return (
        <Upload
            className="avatar-uploader"
            showUploadList={false}
            beforeUpload={beforeUpload}
        >
            {imageUrl ? (
                <Image
                    className="uploaded-image"
                    width={72}
                    height={72}
                    src={imageUrl}
                    alt="avatar"
                />
            ) : (
                uploadComp
            )}
        </Upload>
    );
}
