import express, { Application, Express } from 'express';
import cors from 'cors';
import fibonacciRoutes from './routes/routes';

class App {
  public app: Application;

  constructor() {
    const app: Express = express();
    this.app = app;
    this.config();
    this.routes();
  }

  private config(): void {
    // Enable CORS
    this.app.use(cors());

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private routes(): void {
    this.app.use('/api/fibonacci', fibonacciRoutes);
  }
}

export default new App().app;
