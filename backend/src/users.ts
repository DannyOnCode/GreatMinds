import bcrypt from "bcrypt";

export type User = {
    phone?: string;
    email?: string;
    passwordHash?: string;
    role: "user" | "staff";
};

export const users: User[] = [
    {
        phone: "111",
        role: "user" },
    {
        email: "admin@gmail.com",
        passwordHash: bcrypt.hashSync("staff123", 10),
        role: "staff"
    }
];
