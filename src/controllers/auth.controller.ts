import { Request, Response } from "express";
import { createNewUser, loginUser } from "../services/auth.service";

const registerCtrl = async ({ body }: Request, res: Response) => {
  const response = await createNewUser(body);
  res.status(201).send(response);
};

const loginCtrl = async ({ body }: Request, res: Response) => {
  const { email, password } = body;
  const response = await loginUser({ email, password });

  if (response === "VERIFIED_YOUR_CREDENTIALS") {
    res.status(403);
    res.send(response);
  } else {
    res.send(response);
  }
};

export { registerCtrl, loginCtrl };
