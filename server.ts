import express from "express";
const { exec } = require("child_process");
const app = express();
const port = 1000;

app.get("/", (req: any, res: any) => {
  exec("shutdown /s", (error: any, stdout: any, stderr: any) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
  res.send("Компьютер выключается...");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
