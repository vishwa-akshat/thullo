"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Input } from "antd";

import logo from "@src/assets/Logo.svg";
import mailIcon from "@src/assets/mail.svg";
import lockIcon from "@src/assets/lock.svg";

import SocialButtonsList from "@src/Components/SocialButtonsList";

import "./login.scss";
import { redirect } from "next/navigation";
import useUserStore from "@src/store/user";

type Props = {};

export default function Login({}: Props) {
    const user = useUserStore((state) => state.user);

    React.useEffect(() => {
        if (user) {
            redirect("/");
        }
    }, [user]);

    return (
        <section className="login-page-container">
            <div className="login-card">
                <Image src={logo} alt="logo" />
                <h1 className="heading">Login</h1>
                <Input
                    className="user-creds-input"
                    placeholder="Email"
                    prefix={
                        <Image
                            src={mailIcon}
                            alt="mail"
                            height={24}
                            width={24}
                        />
                    }
                />
                <Input
                    className="user-creds-input"
                    placeholder="Password"
                    prefix={
                        <Image
                            src={lockIcon}
                            alt="password"
                            height={24}
                            width={24}
                        />
                    }
                />
                <Button className="login-btn" type="primary" block>
                    Login
                </Button>
                <div className="social-profile-wrapper">
                    <p className="social-profile-icons-heading">
                        or continue with these social profile
                    </p>
                    <SocialButtonsList />
                </div>
                <div className="register-page-route-text">
                    Don’t have an account yet?{" "}
                    <Link href="/auth/sign-up">Register</Link>
                </div>
            </div>
        </section>
    );
}