import { useState } from 'react';
import "./App.css"

export default function App() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries());

    if (!Number(values.age)) {
      alert('Age must be a number');
      return;
    }

    if (!Number(values.weight)) {
      alert('Weight must be a number');
      return;
    }

    console.log('submitted', values);
    console.log(JSON.stringify(values));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Hi!</h1>
      
      <p className='inp'>Enter your pet name:</p>
      <input type="text" name="username" />

      <p className='inp'>Enter pet's age:</p>
      <input type="text" name="age" />

      <p className='inp'>Enter pet's weight (Kg):</p>
      <input type="text" name="weight" />

      <p className='inp'>Enter pet type:</p>
      <input type="text" name="type" />

      <br /><br />
      <input type="submit" />
    </form>
  );
}