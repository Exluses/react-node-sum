import React, { useState } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("")
  const [sum, setSum] = useState(null);

  const calculateSum = async () => {
    try {
      const response = await axios.post("http://localhost:5000/sum", { num1, num2});
      setSum(response.data.sum);
    } catch (error) {
      console.error("Ошибка при рассчетах", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px"}}>
        <h2>Калькулятор</h2>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Введи первое число"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Введи второе число"
        />
        <button onClick={calculateSum}>Рассчёт</button>
        <h2>Сумма: {sum !== null ? sum: "-"}</h2>
    </div>
  );
}

export default App;