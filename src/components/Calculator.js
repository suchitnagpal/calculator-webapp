import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString()); // ⚠️ Using eval for now (we'll improve this later)
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-5 w-80">
        <div className="mb-3">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full p-2 text-right text-xl border border-gray-300 rounded"
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {["7", "8", "9", "/"].map((item) => (
            <button
              key={item}
              className="p-3 bg-gray-200 text-lg rounded hover:bg-gray-300"
              onClick={() => handleClick(item)}
            >
              {item}
            </button>
          ))}
          {["4", "5", "6", "*"].map((item) => (
            <button
              key={item}
              className="p-3 bg-gray-200 text-lg rounded hover:bg-gray-300"
              onClick={() => handleClick(item)}
            >
              {item}
            </button>
          ))}
          {["1", "2", "3", "-"].map((item) => (
            <button
              key={item}
              className="p-3 bg-gray-200 text-lg rounded hover:bg-gray-300"
              onClick={() => handleClick(item)}
            >
              {item}
            </button>
          ))}
          {["C", "0", "=", "+"].map((item) => (
            <button
              key={item}
              className={`p-3 text-lg rounded ${
                item === "=" ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => {
                if (item === "=") handleCalculate();
                else if (item === "C") handleClear();
                else handleClick(item);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
