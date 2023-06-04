import { Request, Response } from "express";
import FibonacciService from "../services/fibonacci.service";

class FibonacciController {
  public async getFibonacciNumber(req: Request, res: Response): Promise<Response> {
    const n: number = parseInt(req.params.n);
    let fibonacciNumber: number | null = null;

    try {
      if (isNaN(n) || n < 0) {
        return res
          .status(400)
          .send(
            "Invalid input. Please provide a non-negative integer."
          );
      }

      fibonacciNumber = FibonacciService.getFibonacciNumber(n);
    } catch (error: any) {

      console.error(error as Error);
      return res.status(500).json({
        error: error.message
      });

    }

    return res.json({
      fibonacciNumber
    });
  }
}

export default new FibonacciController();
