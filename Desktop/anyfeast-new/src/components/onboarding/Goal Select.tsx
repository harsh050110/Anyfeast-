import { useState } from "react";

const GoalSelect = ({ onContinue }: { onContinue: () => void }) => {
  const [goal, setGoal] = useState("");

  const goals = [
    { title: "Lose Weight", desc: "Reduce body weight through calorie deficit" },
    { title: "Maintain Weight", desc: "Stay at current weight" },
    { title: "Gain Weight", desc: "Build muscle and gain weight" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-8 text-center">
      <h2 className="mb-6 font-medium">Choose your primary fitness goal</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {goals.map((g) => (
          <div
            key={g.title}
            onClick={() => setGoal(g.title)}
            className={`border rounded-xl p-6 cursor-pointer
            ${goal === g.title ? "border-green-500 bg-green-50" : ""}`}
          >
            <h3 className="font-semibold mb-2">{g.title}</h3>
            <p className="text-sm text-gray-500">{g.desc}</p>
          </div>
        ))}
      </div>

      <button
        disabled={!goal}
        onClick={onContinue}
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-2 rounded-lg"
      >
        Continue
      </button>
    </div>
  );
};

export default GoalSelect;
