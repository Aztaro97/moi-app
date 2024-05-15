"use client";

import PoliticingFormStepOne from "@/modules/politicing-services/politicing-services-form/politicing-form-step-one";
import PoliticingFormStepThree from "@/modules/politicing-services/politicing-services-form/politicing-form-step-three";
import PoliticingFormStepTwo from "@/modules/politicing-services/politicing-services-form/politicing-form-step-two";
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

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PoliticingFormStepOne />;
      case 2:
        return <PoliticingFormStepTwo />;
      case 3:
        return <PoliticingFormStepThree />;
      default:
        return null;
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
      <div className="w-full">{renderStep()}</div>
    </div>
  );
};

export default Page;
