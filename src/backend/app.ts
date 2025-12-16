import express, { Request, Response } from "express";
import path from "path";
import http from "http";

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "../public")));

app.get("/h", (req: Request, res: Response) => {
    const { auth } = req.query;
    if (auth === "passord") {
        return res.sendFile(path.join(__dirname, "../SuperHemmeligeHTML-filer/index.html"));
    }
    return res.send("Du er ikke Thomas");
});


const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server kjører på http://localhost:${port}`);
});
