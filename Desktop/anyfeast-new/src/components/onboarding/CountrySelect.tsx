import { useState } from "react";

const CountrySelect = ({ onContinue }: { onContinue: () => void }) => {
  const [selected, setSelected] = useState("");

  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <h2 className="text-center text-gray-600 mb-6">
        Select your country to get personalized recipes and pricing
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div
          onClick={() => setSelected("India")}
          className={`border rounded-xl p-6 flex items-center gap-4 cursor-pointer
          ${selected === "India" ? "border-blue-500 bg-blue-50" : ""}`}
        >
          🇮🇳
          <div>
            <p className="font-semibold">India</p>
            <p className="text-sm text-gray-500">Currency: INR</p>
          </div>
        </div>

        <div
          onClick={() => setSelected("UK")}
          className={`border rounded-xl p-6 flex items-center gap-4 cursor-pointer
          ${selected === "UK" ? "border-blue-500 bg-blue-50" : ""}`}
        >
          🇬🇧
          <div>
            <p className="font-semibold">United Kingdom</p>
            <p className="text-sm text-gray-500">Currency: GBP</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          disabled={!selected}
          onClick={onContinue}
          className={`px-8 py-2 rounded-lg text-white
          ${selected ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-300 cursor-not-allowed"}`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default CountrySelect;
