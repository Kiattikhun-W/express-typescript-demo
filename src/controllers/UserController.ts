import { Request, Response } from "express";

export class UserController {
  static async getUser(req: Request, res: Response): Promise<void> {
    res.json([{ name: "John Doe" }, { name: "Jane Doe2" }]);
  }
}
