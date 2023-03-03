import { Request, Response } from "express";

export class HelloController {
  static async sayHello(req: Request, res: Response) {
    res.send("Hello, world!");
  }
}
