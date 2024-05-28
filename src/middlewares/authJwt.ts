import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

interface requestExtend extends Request {
  user?: string | JwtPayload;
}

const checkJwt = (req: requestExtend, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    console.log({ jwtByUser });
    const jwt = jwtByUser.split(" ").pop();
    const isUser = verifyToken(`${jwt}`);
    if (!isUser) {
      res.status(401).json({ message: "JWT_NOT_VALID" });
    } else {
      req.user = isUser;
      next();
    }
  } catch (error) {
    res.status(404).send("SESSION_NOT_VALID");
  }
};

export { checkJwt };
