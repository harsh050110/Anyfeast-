import { useState } from "react";

type BirthdaySelectProps = {
  onContinue: () => void;
};

const BirthdaySelect = ({ onContinue}: BirthdaySelectProps) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const isValid = day !== "" && month !== "" && year !== "";

  return (
    <div className="bg-white rounded-xl shadow-md p-8 text-center">
      <h2 className="text-gray-600 mb-6">When’s your birthday?</h2>

      <div className="flex justify-center gap-4 mb-6">
        <input
          value={day}
          onChange={(e) => setDay(e.target.value)}
          placeholder="Day"
          className="border rounded-lg px-4 py-2 w-20"
        />
        <input
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          placeholder="Month"
          className="border rounded-lg px-4 py-2 w-24"
        />
        <input
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Year"
          className="border rounded-lg px-4 py-2 w-24"
        />
      </div>



        <button
          disabled={!isValid}
          onClick={onContinue}
          className={`px-8 py-2 rounded-lg text-white ${
            isValid
              ? "bg-gradient-to-r from-blue-500 to-purple-500"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    
  );
};

export default BirthdaySelect;
