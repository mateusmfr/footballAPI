import express from 'express';
import router from './routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(router);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT);
  }
}

export default App;

export const { app } = new App();
