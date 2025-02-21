import { useState } from 'react';
import './App.css';
import './index.css';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  // Logic for calculating BMI
  let calcBmi = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert('Please enter valid weight and height');
    } else {
      let bmi = (parseFloat(weight) / (parseFloat(height) * parseFloat(height))) * 703;
      setBmi(bmi.toFixed(1));

      // BMI message
      if (bmi < 18.5) {
        setMessage('You are underweight');
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        setMessage('You are normal weight');
      } else {
        setMessage('You are overweight');
      }
    }
  };

  // Reload function to reset form
  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI CALCULATOR</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>
              Weight (lbs)
              <input
                type="text"
                placeholder="Enter your weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Height (in)
              <input
                type="text"
                placeholder="Enter your height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </label>
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="button">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
      <p className="pcl">Made with ❤️ by Sai Krishna</p>
    </div>
  );
}

export default App;
