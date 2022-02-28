import express from "express";
import emails from "./db.js";
import bodyParser from "body-parser";
import multer from "multer";
import cors from "cors";

const port = 3000;

// Set up the express app
const app = express();

const upload = multer();

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static("public"));

// Set up CORS
app.use(cors());

// get all emails
app.get("/api/emails", async (req, res) => {
  await new Promise((r) => setTimeout(r, 5000));
  res.status(200).send({
    emails: emails.map((email) => {
      return {
        id: email.id,
        from: email.from,
        title: email.title,
        date: email.date,
      };
    }),
  });
});

app.get("/api/emails/:id/", async (req, res) => {
  await new Promise((r) => setTimeout(r, 5000));
  const email = emails.find((x) => x.id === +req.params.id);

  if (email) {
    return res.status(200).send(email);
  }

  return res.status(404).send({
    message: `No email with the id ${req.params.id} found.`,
  });
});

app.post("/api/emails", async (req, res) => {
  console.log(req.body);
  await new Promise((r) => setTimeout(r, 5000));
  if (!req.body.from || !req.body.title || !req.body.body) {
    return res.status(400).send({
      message: "Every email field should be filled out",
    });
  }

  const email = {
    id: emails.length + 1,
    from: req.body.from,
    title: req.body.title,
    date: new Date(),
    body: req.body.body,
  };

  emails.push(email);
  return res.status(201).send({
    email,
  });
});

app.use(function (req, res) {
  res.send(404);
});

app.listen(port, () => {
  console.log(`Email app listening at http://localhost:${port}`);
});
