"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Form, Input } from "antd";

import logo from "@src/assets/Logo.svg";
import mailIcon from "@src/assets/mail.svg";
import lockIcon from "@src/assets/lock.svg";
import personIcon from "@src/assets/person.svg";

import SocialButtonsList from "@src/Components/SocialButtonsList";

import useUserStore from "@src/store/user";

import {
    nameInputRules,
    emailInputRules,
    passwordInputRules,
} from "@src/app/auth/inputRules";

import "./signUp.scss";
import { redirect } from "next/navigation";
import useAuth from "@src/firebase/auth";

type Props = {};

export default function SignUp({}: Props) {
    const user = useUserStore((state) => state.user);
    const { registerUser } = useAuth();

    React.useEffect(() => {
        if (user) {
            redirect("/");
        }
    }, [user]);

    const handleSignUp = (values: {
        name: string;
        email: string;
        password: string;
    }) => {
        const { name, email, password } = values;

        registerUser({ name, email, password });
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
                    <Form.Item name="name" rules={nameInputRules}>
                        <Input
                            className="user-creds-input"
                            placeholder="Full Name"
                            prefix={
                                <Image
                                    src={personIcon}
                                    alt="name"
                                    height={24}
                                    width={24}
                                />
                            }
                        />
                    </Form.Item>
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
                        <Input.Password
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
