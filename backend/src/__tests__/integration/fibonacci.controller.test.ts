import request from 'supertest';
import app from '../../app';

describe('FibonacciController', () => {
  it('should return the correct Fibonacci number', async () => {
    await request(app)
      .get('/api/fibonacci/6')
      .expect('Content-Type', /json/)
      .expect(200, { fibonacciNumber: 8 });
  });

  it('should return 400 for invalid input', async () => {
    await request(app)
      .get('/api/fibonacci/-1')
      .expect('Content-Type', /text/)
      .expect(400, 'Invalid input. Please provide a non-negative integer.');
  });
  
  it('should return 400 for non-integer input', async () => {
    await request(app)
      .get('/api/fibonacci/foo')
      .expect('Content-Type', /text/)
      .expect(400, 'Invalid input. Please provide a non-negative integer.');
  });
});
