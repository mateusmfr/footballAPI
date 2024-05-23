import { Request, Response } from 'express';
import VerifyService from '../services/verifyService';
import HTTPStatusMap from '../utils/HTTPStatusMap';

export default class VerifyController {
  constructor(private verifyService = new VerifyService()) {}

  public verify = async (req: Request, res: Response): Promise<void> => {
    const score = req.body;
    const result = this.verifyService.verifyScore(score);
    const statusCode = HTTPStatusMap(result.status);
    res.status(statusCode).json(result.data);
  };
}
