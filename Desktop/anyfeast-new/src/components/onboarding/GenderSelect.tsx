import { useState } from "react";

const GenderSelect = ({
  onContinue
}: {
  onContinue: () => void;
}) => {
  const [selected, setSelected] = useState("");

  return (
    <div className="bg-white rounded-xl shadow-md p-8 text-center">

      <h2 className="text-gray-600 mb-6">
        This helps us calculate accurate health metrics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {["Male", "Female", "Other"].map((g) => (
          <div
            key={g}
            onClick={() => setSelected(g)}
            className={`border rounded-xl p-6 cursor-pointer
              ${selected === g ? "border-blue-500 bg-blue-50" : ""}`}
          >
            {g}
          </div>
        ))}
      </div>

      <div className="flex justify-between">

        <button
          disabled={!selected}
          onClick={onContinue}
          className={`px-8 py-2 rounded-lg text-white
            ${
              selected
                ? "bg-gradient-to-r from-blue-500 to-purple-500"
                : "bg-gray-300 cursor-not-allowed"
            }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default GenderSelect;
