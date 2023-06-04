import FibonacciService from '../../services/fibonacci.service';

describe('FibonacciService', () => {
  it('should return the correct Fibonacci number', () => {
    expect(FibonacciService.getFibonacciNumber(0)).toBe(0);
    expect(FibonacciService.getFibonacciNumber(1)).toBe(1);
    expect(FibonacciService.getFibonacciNumber(2)).toBe(1);
    expect(FibonacciService.getFibonacciNumber(3)).toBe(2);
    expect(FibonacciService.getFibonacciNumber(4)).toBe(3);
    expect(FibonacciService.getFibonacciNumber(5)).toBe(5);
    expect(FibonacciService.getFibonacciNumber(6)).toBe(8);
  });
  it('should return the correct Fibonacci number for large inputs', () => {
    expect(FibonacciService.getFibonacciNumber(30)).toBe(832040);
  });

  it('should throw an error for non-integer input', () => {
    expect(() => FibonacciService.getFibonacciNumber(1.5)).toThrow('Invalid input. Please provide a non-negative integer.');
  });

  it('should throw an error for non-number input', () => {
    // @ts-expect-error
    expect(() => FibonacciService.getFibonacciNumber('foo')).toThrow('Invalid input. Please provide a non-negative integer.');
  });
});
