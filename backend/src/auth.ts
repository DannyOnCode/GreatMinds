import express from "express";
import bcrypt from "bcrypt";
import { users } from "./users.ts";

const router = express.Router();

/**
 * USER LOGIN (phone only)
 */
router.post("/login/user", (req, res) => {
    const { phone } = req.body;

    const user = users.find(
        u => u.phone === phone && u.role === "user"
    );

    if (!user) {
        return res.status(401).json({ error: "User not found" });
    }

    res.json({ role: "user", phone: user.phone });
});

/**
 * STAFF LOGIN (phone + password)
 */
router.post("/login/staff", async (req, res) => {
    const { email, password } = req.body;

    const staff = users.find(
        u => u.email === email && u.role === "staff"
    );

    if (!staff || !staff.passwordHash) {
        return res.status(401).json({ error: "Invalid credentials" });
    }

    const ok = await bcrypt.compare(password, staff.passwordHash);
    if (!ok) {
        return res.status(401).json({ error: "Invalid credentials" });
    }

    res.json({ role: "staff", phone: staff.email });
});

export default router;
