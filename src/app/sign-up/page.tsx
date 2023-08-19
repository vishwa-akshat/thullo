"use client";
import React from "react";
import Image from "next/image";
import { Button, Input } from "antd";

import logo from "@src/assets/Logo.svg";
import mailIcon from "@src/assets/mail.svg";
import lockIcon from "@src/assets/lock.svg";

import "./signUp.scss";
import SocialButtonsList from "@src/Components/SocialButtonsList";
import Link from "next/link";

type Props = {};

export default function SignUp({}: Props) {
    return (
        <section className="auth-page-container">
            <div className="auth-card">
                <Image src={logo} alt="logo" />
                <h1 className="heading">Welcome to Your Kanban Board</h1>
                <p className="sub-heading">
                    Join Our Productivity Platform to Organize Your Tasks
                    Effectively
                </p>
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
                <Button className="auth-btn" type="primary" block>
                    Register
                </Button>
                <div className="social-profile-wrapper">
                    <p className="social-profile-icons-heading">
                        or continue with these social profile
                    </p>
                    <SocialButtonsList />
                </div>
                <div className="login-page-route-text">
                    Already a member? <Link href="/login">Login</Link>
                </div>
            </div>
        </section>
    );
}
