import { useState } from "react";

type Props = {
  onContinue: () => void;
};

type ChipProps = {
  label: string;
  active: boolean;
  activeColor?: string;
  onClick: () => void;
};

const Chip = ({ label, active, activeColor = "blue", onClick }: ChipProps) => {
  const bgColor = active ? `bg-${activeColor}-100` : "bg-gray-100";
  const textColor = active ? `text-${activeColor}-700` : "text-gray-600";
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${bgColor} ${textColor} hover:opacity-80`}
    >
      {label}
    </button>
  );
};

type InputWithAddProps = {
  value: string;
  onChange: (value: string) => void;
  onAdd: () => void;
  placeholder: string;
};

const InputWithAdd = ({ value, onChange, onAdd, placeholder }: InputWithAddProps) => {
  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        onKeyPress={(e) => e.key === "Enter" && onAdd()}
      />
      <button
        onClick={onAdd}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
};

const DEFAULT_ALLERGIES = [
  "Peanuts",
  "Tree Nuts",
  "Dairy",
  "Eggs",
  "Soy",
  "Wheat",
  "Shellfish",
  "Fish",
];

const DEFAULT_DISLIKES = [
  "Broccoli",
  "Mushrooms",
  "Olives",
  "Cilantro",
  "Onions",
  "Tomatoes",
  "Eggplant",
];

const AllergyPreference = ({ onContinue }: Props) => {
  const [allergies, setAllergies] = useState<string[]>([]);
  const [dislikes, setDislikes] = useState<string[]>([]);

  const [customAllergy, setCustomAllergy] = useState("");
  const [customDislike, setCustomDislike] = useState("");

  const toggleItem = (
    item: string,
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setList(
      list.includes(item)
        ? list.filter((i) => i !== item)
        : [...list, item]
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
      
      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
        ⚠️ Allergies
      </h3>

      <div className="flex flex-wrap gap-3 mb-4">
        {DEFAULT_ALLERGIES.map((item) => (
          <Chip
            key={item}
            label={item}
            active={allergies.includes(item)}
            onClick={() => toggleItem(item, allergies, setAllergies)}
          />
        ))}
      </div>

      <InputWithAdd
        value={customAllergy}
        onChange={setCustomAllergy}
        onAdd={() => {
          if (customAllergy.trim()) {
            setAllergies([...allergies, customAllergy.trim()]);
            setCustomAllergy("");
          }
        }}
        placeholder="Add custom allergy..."
      />

      <h3 className="font-semibold text-lg mt-8 mb-3">
        Ingredients You Dislike
      </h3>

      <div className="flex flex-wrap gap-3 mb-4">
        {DEFAULT_DISLIKES.map((item) => (
          <Chip
            key={item}
            label={item}
            active={dislikes.includes(item)}
            activeColor="orange"
            onClick={() => toggleItem(item, dislikes, setDislikes)}
          />
        ))}
      </div>

      <InputWithAdd
        value={customDislike}
        onChange={setCustomDislike}
        onAdd={() => {
          if (customDislike.trim()) {
            setDislikes([...dislikes, customDislike.trim()]);
            setCustomDislike("");
          }
        }}
        placeholder="Add custom dislike..."
      />


      {dislikes.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {dislikes.map((item) => (
            <span
              key={item}
              className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm flex items-center gap-1"
            >
              {item}
              <button
                onClick={() =>
                  setDislikes(dislikes.filter((d) => d !== item))
                }
                className="text-orange-500 hover:text-orange-700"
              >
                ✕
              </button>
            </span>
          ))}
        </div>
      )}


        <button
          onClick={onContinue}
          className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90"
        >
          Continue
        </button>
      </div>
  );
};

export default AllergyPreference;
