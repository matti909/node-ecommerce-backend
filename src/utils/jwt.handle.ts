import "dotenv/config";
import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "token.010101";

const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: "2d",
  });
  return jwt;
};

const verifyToken = async () => {};

export { generateToken, verifyToken };
