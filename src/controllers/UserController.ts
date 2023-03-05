import { Request, Response } from "express";
import { connect } from "../config/db";

export class UserController {
  static async getUser(req: Request, res: Response): Promise<void> {
    try {
      const conn = await connect();
      const [Rows] = await conn.query("SELECT * FROM user");
      res.status(200).json(Rows);
      conn.end();

    } catch (error) {
      // const error = new Error()
      // error
      console.log(error)
    }
   
  }
}
 