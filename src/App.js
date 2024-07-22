import React from "react";
import Scoops from "./components/Scoops";
import Toppings from "./components/Toppins";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="bg-black min-vh-100 text-white p-3 py-5">
      <div className="container">
        <Scoops />
        <Toppings />
        <Form />
      </div>
    </div>
  );
};

export default App;
