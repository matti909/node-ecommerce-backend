import { NextFunction, Response, Request, ErrorRequestHandler } from "express";
import { z, ZodError } from "zod";

const ValidateRequest = (schema: z.ZodObject<any, any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = schema.parse({ body: req.body });
      console.log(result);
      next();
    } catch (error: any) {
      if (error instanceof ZodError) {
        const errorMessages = error.errors.map((issue: any) => ({
          message: `${issue.path.join(".")} is ${issue.message}`,
        }));
        res.status(403).json({ error: "Invalid data", details: errorMessages });
      } else {
        res.status(500).json({ error: "Internal Server Error" });
      }
    }
  };
};

export { ValidateRequest };
