// src/index.ts
import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (_req, res) => {
	res.send("Hello TypeScript + Express!");
});

app.listen(port, () => {
	console.log(`Serveur lancé sur http://localhost:${port}`);
	console.log(`Modif faite par Jeremy : Test`);
});

// Perera Gonzalez Maxence 


export default app;
