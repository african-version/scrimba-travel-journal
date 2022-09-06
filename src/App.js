import React from "react";
import Navbar from './components/Navbar';
import Card from './components/Card'
import Data from './data'

export default function App() {
  const cards = Data.map(item => {
    return (
      <Card
        {...item}
      />
    )
  })

  return (
    <div className="App">
      <Navbar/>
      <section className="body--section">
        {cards}
      </section>
    </div>
  );
}
