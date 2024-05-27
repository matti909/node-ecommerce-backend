import { Router } from "express";
import { registerCtrl, loginCtrl } from "../controllers/auth.controller";

const router = Router();

/**
 * Post track
 * @openapi
 * /auth/register:
 *   post:
 *      tags:
 *      -   users
 *      summary: "Create an User"
 *      description: Endpoint for User Register on System
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/user"
 *      response:
 *          '201':
 *              description: Return an Object User Created
 *          '400':
 *              description: Error validation
 *      security:
 *          - bearerAuth: []
 */

router.post("/register", registerCtrl);

router.post("/login", loginCtrl);

export { router };
