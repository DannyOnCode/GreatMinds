import express from "express";
import cors from "cors";
import auth from "./auth.ts";

const app = express();

app.use(cors());
app.use(express.json());

// attach routes
app.use(auth);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});
