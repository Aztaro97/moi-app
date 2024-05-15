"use client";

import Progress from "@/components/Progress";
import { ThreeDCard } from "@/components/ThreeDCard";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import PoliticingFormStepOne from "@/modules/politicing-services/politicing-services-form/politicing-form-step-one";
import React, { useState } from "react";

const Page: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [words, setWords] = useState(
    "Step-1: Please select the vehicle from the list of vehicles and click the next step button"
  );

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_5fr] justify-center items-center min-h-screen">
      <div className="p-4">
        <p>
          Step-1: Please select the vehicle from the list of vehicles and click
          the next step button
        </p>
      </div>

      {/* <div className="w-2/3 pt-6  flex justify-center items-center flex-col ">
        <div className="mt-2 pt-2  text-black">
          <Progress currentStep={currentStep} />
        </div>
        {currentStep === 1 && (
          <ThreeDCard
            serviceTitle="Description"
            serviceDescription="It is a service whereby a device connected to fire systems in the control room is installed in homes, Resulting in a speed of response and systems effectiveness, Allowing users to follow up on previous submitted applications."
            imageUrl="/images/traffic.jpg"
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
          >
            ergreg
          </ThreeDCard>
        )}

      </div> */}
      <div className="w-full">
        <PoliticingFormStepOne />
      </div>
    </div>
  );
};

export default Page;
