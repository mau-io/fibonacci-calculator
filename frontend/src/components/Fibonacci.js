import React, { useState } from 'react';
import axios from 'axios';

const Fibonacci = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const fetchFibonacciNumber = async () => {
    if (isNaN(value) || value === '') {
      setError('Please enter a valid number.');
      return;
    }
    setError('');
    try {

      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/fibonacci/${value}`);
      setResult(res.data.fibonacciNumber);
    } catch (err) {
      if (err.response?.data?.error) {
        setResult(err.response.data.error);
      } else {
        setResult(err.message);
      }
    }
  }

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f5f5f5',
    },
    inputContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
    },
    input: {
      margin: '20px 0',
      padding: '10px',
      width: '200px',
      fontSize: '16px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#2196F3',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    result: {
      margin: '40px 0',
      fontSize: '35px',
      color: '#2196F3'
    }
  }

  return (
    <div style={styles.container}>
      <h1>Calculate Fibonacci!</h1>
      <div style={styles.inputContainer}>
        <input
          type="number"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Enter a number..."
          style={styles.input}
        />
        <button onClick={fetchFibonacciNumber} style={styles.button}>Calculate</button>
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <h2>Fibonacci Result:  <span style={styles.result}> {result}</span></h2>
    </div>
  );
}

export default Fibonacci;
