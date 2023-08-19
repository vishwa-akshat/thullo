"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Form, Input } from "antd";

import logo from "@src/assets/Logo.svg";
import mailIcon from "@src/assets/mail.svg";
import lockIcon from "@src/assets/lock.svg";

import SocialButtonsList from "@src/Components/SocialButtonsList";

import useUserStore from "@src/store/user";

import { emailInputRules, passwordInputRules } from "@src/app/auth/inputRules";

import "./signUp.scss";
import { redirect } from "next/navigation";

type Props = {};

export default function SignUp({}: Props) {
    const user = useUserStore((state) => state.user);
    const registerUser = useUserStore((state) => state.registerUser);

    React.useEffect(() => {
        if (user) {
            redirect("/");
        }
    }, [user]);

    const handleSignUp = (values: { email: string; password: string }) => {
        registerUser(values.email, values.password);
    };

    return (
        <section className="auth-page-container">
            <div className="auth-card">
                <Image src={logo} alt="logo" />
                <h1 className="heading">Welcome to Your Kanban Board</h1>
                <p className="sub-heading">
                    Join Our Productivity Platform to Organize Your Tasks
                    Effectively
                </p>
                <Form name="Register" onFinish={handleSignUp}>
                    <Form.Item name="email" rules={emailInputRules}>
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
                    </Form.Item>
                    <Form.Item name="password" rules={passwordInputRules}>
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
                    </Form.Item>
                    <Form.Item>
                        <Button
                            htmlType="submit"
                            className="auth-btn"
                            type="primary"
                            block
                        >
                            Register
                        </Button>
                    </Form.Item>
                </Form>
                <div className="social-profile-wrapper">
                    <p className="social-profile-icons-heading">
                        or continue with these social profile
                    </p>
                    <SocialButtonsList />
                </div>
                <div className="login-page-route-text">
                    Already a member? <Link href="/auth/login">Login</Link>
                </div>
            </div>
        </section>
    );
}
