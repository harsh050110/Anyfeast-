import { useState } from "react";

const Measurements = ({ onContinue }: { onContinue: () => void }) => {
  const [unit, setUnit] = useState("metric");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  return (
    <div className="bg-white rounded-xl shadow-md p-8 text-center">
      <h2 className="mb-2 font-medium">We need your measurements</h2>
      <p className="text-gray-500 mb-6">
        To calculate BMI and calorie needs
      </p>

      {/* UNIT TOGGLE */}
      <div className="flex justify-center gap-2 mb-6">
        <button
          onClick={() => setUnit("metric")}
          className={`px-4 py-2 rounded ${
            unit === "metric"
              ? "bg-blue-600 text-white"
              : "border"
          }`}
        >
          Metric (cm/kg)
        </button>
        <button
          onClick={() => setUnit("imperial")}
          className="border px-4 py-2 rounded"
        >
          Imperial (ft/lbs)
        </button>
      </div>

      {/* INPUTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder={`Height (${unit === "metric" ? "cm" : "ft"})`}
          className="border rounded-lg px-4 py-3"
        />
        <input
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder={`Weight (${unit === "metric" ? "kg" : "lbs"})`}
          className="border rounded-lg px-4 py-3"
        />
      </div>

      <button
        disabled={!height || !weight}
        onClick={onContinue}
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-2 rounded-lg"
      >
        Continue
      </button>
    </div>
  );
};

export default Measurements;
