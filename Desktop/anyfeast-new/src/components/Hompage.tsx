import { useState } from "react";
import CountrySelect from "./onboarding/CountrySelect";
import GenderSelect from "./onboarding/GenderSelect";
import BirthdaySelect from "./onboarding/BirthdaySelect";
import Measurements  from "./onboarding/Measurements";
import TargetWeight from "./onboarding/TargetWeight";
import GoalSelect from "./onboarding/Goal Select";
import AllergyPreference from "./onboarding/AllergyPrefer";
import Preferences  from "./onboarding/Preferences";

const Homepage = () => {
  const [step, setStep] = useState(1);

  return (
    <main className="bg-[#faf9ff] min-h-screen">

     
      <div className="bg-[#fff7ec] px-6 py-3 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span className="font-medium">
            Recipe Personalization Powered by AI
          </span>
          <span className="text-green-600 font-semibold">Active</span>
        </div>

        <div className="bg-green-500 text-white px-4 py-1 rounded-full text-xs">
          ON
        </div>
      </div>

      
      <div className="max-w-4xl mx-auto px-6 py-12">
        {step === 1 && <CountrySelect onContinue={() => setStep(2)} />}
        {step === 2 && <GenderSelect onContinue={() => setStep(3)} />}
        {step === 3 && <BirthdaySelect onContinue={()=> setStep(4)}/>}
           {step === 4 && <Measurements onContinue={() => setStep(5)} />}
        {step === 5 && <GoalSelect  onContinue={()  => setStep(6)} />}
          {step===6 && <AllergyPreference onContinue={()=>setStep(7)}/>}
              {step===7 && <Preferences />}
      </div>

    </main>
  );
};

export default Homepage;
