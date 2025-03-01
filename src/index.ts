import express from "express";
import { PrismaClient } from "@prisma/client";
const pc = new PrismaClient();

const app = express();
app.use(express.json());

app.post("/user", async (req, res) => {
 const { name, username, psk } = req.body;
 const user = await pc.user.create({ data: { name, username, psk } });
 res.status(201).json({ message: "user created", user });
});
app.get("/user", async (req, res) => {
 const users = await pc.user.findMany();
 res.status(200).json({ users });
});
app.post("/todo", async (req, res) => {
 const { title, u_id, desc, done } = req.body;
 const todo = await pc.todo.create({ data: { title, u_id, desc, done } });
 res.status(200).json({ message: "todo created", todo });
});

app.get("/all", async (req, res) => {
 const { todo_id } = req.body;
 const data = await pc.todo.findUnique({
  where: { id: todo_id },
  select: { user: true, title: true, done: true, desc: true },
 });

 res.status(200).json({ data });
});
app.listen(3000, () => console.log("server is up"));
