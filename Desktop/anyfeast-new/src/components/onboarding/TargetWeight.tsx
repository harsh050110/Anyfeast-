import { useState } from "react";

const TargetWeight = () => {
  const currentWeight = 80;
  const [target, setTarget] = useState(75);

  return (
    <div className="bg-white rounded-xl shadow-md p-8 text-center">
      <h2 className="mb-6 font-medium">What is your target weight?</h2>

      <input
        type="number"
        value={target}
        onChange={(e) => setTarget(Number(e.target.value))}
        className="border rounded-lg px-4 py-3 w-40 text-center mb-4"
      />

      <div className="bg-blue-50 rounded-lg p-4 mb-4 text-sm">
        <p>Current: {currentWeight} kg</p>
        <p>Target: {target} kg</p>
        <p className="text-blue-600 font-semibold">
          ↓ {currentWeight - target} kg
        </p>
      </div>

      <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-2 rounded-lg">
        Continue
      </button>
    </div>
  );
};

export default TargetWeight;
