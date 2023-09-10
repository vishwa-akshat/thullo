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

export const emailUpdateInputRules: any = [
    {
        type: "email",
        message: "Please enter a valid email address",
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
export const phoneNumberUpdateInputRules = [
    {
        pattern:
            /^(?:(?:(?:\+|0{0,2})91(\s*[\-\s]\s*)?|[0]?)?[789]\d{9})|(?:\d{3,5}[\-\s]\d{6,8})$/,
        message: "Please enter a correct phone number",
    },
];

export const nameInputRules = [
    {
        required: true,
        message: "Please enter your name",
    },
];
