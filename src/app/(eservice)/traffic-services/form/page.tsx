"use client";

import PoliticingService from "@/modules/politicing-services";
import { usePoliticingFormStepStore } from "@/stores/services/usePoliticingFormStepStore";
import React from "react";

const Page: React.FC = () => {
  const { setCurrentStep, currentStep } = usePoliticingFormStepStore();

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
      <PoliticingService />
    </div>
  );
};

export default Page;
