export const emailInputRules: any = [
    {
        type: "email",
        message: "Please enter a valid email address",
    },
    {
        required: true,
        message: "Email is required",
    },
];

export const passwordInputRules = [
    {
        required: true,
        message: "Please input your password!",
    },
    {
        min: 8,
        message: "Password must be at least 8 characters long",
    },
    {
        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        message:
            "Password must contain at least one uppercase letter, one lowercase letter, and one number",
    },
];
