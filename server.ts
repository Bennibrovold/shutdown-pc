import express from "express";
const { exec } = require("child_process");
const app = express();
const port = 1000;

app.get("/s", (req: any, res: any) => {
  exec("shutdown /s");
  res.send("Компьютер выключается...");
});

app.get("/r", (req: any, res: any) => {
  exec("shutdown /r");
  res.send("Компьютер перезагружается...");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
