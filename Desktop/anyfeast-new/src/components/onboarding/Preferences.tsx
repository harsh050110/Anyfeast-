import { useState } from "react";

const cuisines = [
  "Indian", "Chinese", "Italian", "Japanese", "Mexican",
  "Thai", "Korean", "Mediterranean", "American", "French",
];

const healthGoals = [
  "Muscle Gain", "Heart Health", "Brain Health", "Hair Fall Control",
  "Sugar Control", "Bone Health", "Eye Health", "Immunity Boost",
  "Better Sleep", "Skin Health", "Energy Boost", "Stress Relief",
];

const cookingTime = [
  { label: "15–30 mins", desc: "Quick & Easy" },
  { label: "45–60 mins", desc: "Moderate Time" },
  { label: "I love to cook", desc: "No Time Limit" },
];

const chefType = [
  { label: "Air Fryer", desc: "Modern & Fast" },
  { label: "Rice Cooker", desc: "Simple Setup" },
  { label: "Full Kitchen", desc: "All Equipment" },
];

export default function Preferences() {
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [selectedCooking, setSelectedCooking] = useState("");
  const [selectedChef, setSelectedChef] = useState("");

  const isFormComplete =
    selectedCuisines.length > 0 &&
    selectedCooking !== "" &&
    selectedChef !== "";

  const onContinue = () => {
    // Handle form submission
    console.log({
      cuisines: selectedCuisines,
      goals: selectedGoals,
      cookingTime: selectedCooking,
      chefType: selectedChef,
    });
  };

  const toggleItem = (
    value: string,
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setList(
      list.includes(value)
        ? list.filter((v) => v !== value)
        : [...list, value]
    );
  };

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10 space-y-10">
      {/* Preferred Cuisines */}
      <section>
        <h2 className="text-xl font-semibold mb-1">Preferred Cuisines</h2>
        <p className="text-sm text-gray-500 mb-4">
          Select at least 1 cuisine you enjoy
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {cuisines.map((cuisine) => (
            <button
              key={cuisine}
              onClick={() =>
                toggleItem(cuisine, selectedCuisines, setSelectedCuisines)
              }
              className={`rounded-xl border px-4 py-3 text-sm font-medium transition
                ${
                  selectedCuisines.includes(cuisine)
                    ? "border-blue-500 bg-blue-50 text-blue-600"
                    : "border-gray-200 hover:border-gray-400"
                }`}
            >
              {cuisine}
            </button>
          ))}
        </div>
      </section>

      {/* Health Goals */}
      <section>
        <h2 className="text-xl font-semibold mb-1">
          Additional Health Goals <span className="text-gray-400">(Optional)</span>
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Select any specific health concerns you'd like to address
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {healthGoals.map((goal) => (
            <button
              key={goal}
              onClick={() =>
                toggleItem(goal, selectedGoals, setSelectedGoals)
              }
              className={`rounded-full border px-4 py-2 text-sm transition
                ${
                  selectedGoals.includes(goal)
                    ? "border-green-500 bg-green-50 text-green-600"
                    : "border-gray-200 hover:border-gray-400"
                }`}
            >
              {goal}
            </button>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-2">
          {selectedGoals.length} goal(s) selected
        </p>
      </section>

      {/* Cooking Time */}
      <section>
        <h2 className="text-xl font-semibold mb-1">Max Cooking Time Per Meal</h2>
        <p className="text-sm text-gray-500 mb-4">
          How much time can you dedicate to cooking?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cookingTime.map((item) => (
            <button
              key={item.label}
              onClick={() => setSelectedCooking(item.label)}
              className={`rounded-xl border p-4 text-left transition
                ${
                  selectedCooking === item.label
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-400"
                }`}
            >
              <p className="font-medium">{item.label}</p>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Chef Type */}
      <section>
        <h2 className="text-xl font-semibold mb-1">What Type of Chef Are You?</h2>
        <p className="text-sm text-gray-500 mb-4">
          Select your kitchen setup
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {chefType.map((item) => (
            <button
              key={item.label}
              onClick={() => setSelectedChef(item.label)}
              className={`rounded-xl border p-4 text-left transition
                ${
                  selectedChef === item.label
                    ? "border-purple-500 bg-purple-50"
                    : "border-gray-200 hover:border-gray-400"
                }`}
            >
              <p className="font-medium">{item.label}</p>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Continue Button */}
      <div className="flex justify-end">
<button disabled={!isFormComplete}
  onClick={onContinue}
  className={`px-10 py-3 rounded-xl font-medium transition-all
    ${
      isFormComplete
        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
        : "bg-gray-200 text-gray-400 cursor-not-allowed"
    }`}
>
  Continue
</button>
      </div>
    </div>
  );
}
export default Preferences;
