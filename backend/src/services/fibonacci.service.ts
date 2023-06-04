class FibonacciService {
  getFibonacciNumber(n: number): number | never { // explicit return type

    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
      throw new Error(
        'Invalid input. Please provide a non-negative integer.'
      );
    }

    if (n <= 1) return n;

    let prev: number = 0;
    let next: number = 1;

    for (let i: number = 2; i <= n; i++) {
      let temp: number = next;
      next = prev + next;
      prev = temp;

      if (!isFinite(next)) throw new Error(
        'Input is too large to compute Fibonacci number.'
      );      
    }

    return next;
  }
}

export default new FibonacciService();
